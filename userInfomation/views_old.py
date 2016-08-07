from django.shortcuts import render
from pymongo import MongoClient
import json
connection = MongoClient("localhost", 27017)
db = connection["ab101group4"]
#db.authenticate("ab101", "1234")
collection = db.userinfo
#usernetwork = db.network



def transform(input):
	input = dict(sorted(input.iteritems(), key=lambda d:d[0], reverse = True))
	output = []
	flag = False
	for key in input:
		temp = {}
		temp['label'] = key
		if not input[key]:
			input[key] = 0
		if input[key] != 0:
			flag = True
		temp['value'] = input[key]
		output.append(temp)
	return json.dumps(output) if flag else json.dumps([])


# Create your views here.
def display(request, id):
	#55f7699c2756dd40def8c2a4
	#54ac229cd4fdab6eca38e0ea
	result = collection.find({"_id":id})[0]
	profile_url = result['profile_pic_origin']
	follower_cnt = result['follower_cnt']
	recommendation_count = result['recommendation_count']
	post_cnt = result['post_cnt']
	page_rank = round(result['page_rank'],4)
	display_name = result.get('display_name')
	active_region = transform(result['active_region'])
	blog_cnt_by_type = transform(result['blog_cnt_by_type'])
	sentiment_score = transform(result['sentiment_score'])
	within_zscore = transform(result['within_zscore'])
	between_zscore = transform(result['between_zscore'])
	food_type = result['food_type']
	food_type_length = len(food_type)
	restaurant = {}
	for ftype in food_type:
		for like in food_type[ftype][0]:
			if like[1] not in restaurant:
				restaurant[like[1]] = {}
				restaurant[like[1]]['like'] = [like[0]]
				restaurant[like[1]]['dislike'] = []
				restaurant[like[1]]['type'] = ftype
				restaurant[like[1]]['region'] = like[2]
			else:
				restaurant[like[1]]['like'].append(like[0])
		for dislike in food_type[ftype][1]:
			if dislike[1] not in restaurant:
				restaurant[dislike[1]] = {}
				restaurant[dislike[1]]['dislike'] = [dislike[0]]
				restaurant[dislike[1]]['like'] = []
				restaurant[dislike[1]]['type'] = ftype
				restaurant[dislike[1]]['region'] = like[2]
			else:
				restaurant[dislike[1]]['dislike'].append(dislike[0])
	restaurant = transform(restaurant)
	# formatted_food_type = []
	# for key in food_type:
	# 	temp = {}
	# 	temp['label'] = key
	# 	temp['value'] = food_type[key]
	# 	formatted_food_type.append(temp)
	# formatted_food_type = json.dumps(formatted_food_type)
	return render(request,'userinfo/index.html',locals())

def network(request,id):
	result = json.dumps(list(usernetwork.find()))
	id = json.dumps(id);
	return render(request,'userinfo/network.html',locals())