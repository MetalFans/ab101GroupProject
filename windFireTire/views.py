# -*- coding:utf-8 -*-
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import render
from .models import User10
from .models import Users
import json
# Connect to MongoDB
from pymongo import MongoClient
#client = MongoClient('localhost', 27017)
client = MongoClient('ds145415.mlab.com', 45415)
db = client['ab101group4']
db.authenticate("user", "1234")
# 可拿來Query類別Dic
restaurantCategory = db.restaurantCategory.find()[0]
# 可拿來下Sort的變數List
queryList=['','categoryTotol' ,'avgBrowse_cnt' ,'follower_cnt','post_cnt','page_rank']

# Create your views here.
def getUsers(request,category,sortVar):
    if sortVar not in queryList:
        return HttpResponseRedirect("/error404")
    if category in restaurantCategory:
        smllDic=restaurantCategory[category]
        categoryNameCh=restaurantCategory[category]['categoryNameCh']
        varName=restaurantCategory[category]['varName']
        # 當沒有給排序條件時，預設的查詢條件的query
        if sortVar=='' or sortVar=='page_rank'   :
            # users = Users.objects.raw('Select * from users where %s>0 order by %s DESC Limit 50  ' % (smllDic['varName'],smllDic['varName']))
            users = Users.objects.raw('Select * from (Select * from users where %s>0 order by %s DESC Limit 50 )  as top50   order by %s DESC  ' % (smllDic['varName'],smllDic['varName'],'page_rank'))
        elif sortVar=='categoryTotol' :
            users = Users.objects.raw('Select * from (Select * from users where %s>0 order by %s DESC Limit 50 )  as top50 order by %s DESC ' % (smllDic['varName'],smllDic['varName'],smllDic['varName']))
        elif sortVar=='avgBrowse_cnt' :
            sortVar='browse_cnt/post_cnt'
            users = Users.objects.raw('Select * from (Select * from users where %s>0 order by %s DESC Limit 50 )  as top50   order by %s DESC ' % (smllDic['varName'],smllDic['varName'],sortVar))
        else:
            users = Users.objects.raw('Select * from (Select * from users where %s>0 order by %s DESC Limit 50 )  as top50   order by %s DESC ' % (smllDic['varName'],smllDic['varName'],sortVar))
            # (where)找出選擇類別文章數>0, (order by) 分別對 類別文章數,PageRank 做降序排序,取前100名
            #users = Users.objects.raw('Select * from users where  %s>0 order by %s DESC,page_rank DESC Limit 100' % (smllDic['varName'],smllDic['varName']))
        
        # Show data to browser console
        smllDic2=json.dumps(smllDic)

        # lambda 說明:
        # lambda，用完即丟，不著痕跡。讓你實作出很簡單的function(只處理一個運算式)。
        # lambda param1, param2, ... : expression
        # 其實就等於:
        # def fun( param1, param2, ... ) :
        #     return expression

        # vars(i)將物件轉為字典

        # map(function, iterable)   function 為函數， iterable 則為迭代器
        # 此函數取得依 function 計算 iterable 中每個元素的結果
        usersList= map(lambda i: vars(i), users)
        bigUserList=[]
        for u in usersList:
            smallUserDic={}
            smallUserDic['field_id']=u['field_id']
            smallUserDic['display_name']=u['display_name']
            smallUserDic['fav_cnt']=u['fav_cnt']
            smallUserDic['follower_cnt']=u['follower_cnt']
            smallUserDic['following_cnt']=u['following_cnt']
            smallUserDic['post_cnt']=u['post_cnt']
            smallUserDic['profile_pic_origin']=u['profile_pic_origin']
            smallUserDic['browse_cnt']=u['browse_cnt']
            smallUserDic['checkin_cnt']=u['checkin_cnt']
            smallUserDic['browse_cnt_divide_post_cnt']=u['browse_cnt']/u['post_cnt']
            smallUserDic['page_rank']=int(round(u['page_rank']*1000000,0))
            smallUserDic['blog_cnt_by_this_category']=u[varName]
            bigUserList.append(smallUserDic)

        return render(request,'windFireTire.html',locals())
    else:
	# return render(request,'windFireTire.html',{'user10s':user10s,'users':users,'dondon':dondon,'users_vegetable_food':users_vegetable_food,'users_vegetable_food2':users_vegetable_food2})
        return HttpResponseRedirect("/error404")
