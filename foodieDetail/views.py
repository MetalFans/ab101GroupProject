# -*- coding:utf-8 -*-
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import render
import json
from pymongo import MongoClient

#Def
def jsonDump(dataIn):
    print json.dumps(dataIn,ensure_ascii=False).encode('utf-8')
def getFoodieDetail(request):
    client = MongoClient('localhost', 27017)
    db = client['ab101group4']
    testCollection = db.testCollection
    testCollection3 = testCollection.find().limit(3)
    return render(request,'foodieDetail.html',locals())
