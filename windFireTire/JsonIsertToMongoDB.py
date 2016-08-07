# -*- coding:utf-8 -*-
from django.test import TestCase
import json
import time
# Connect to MongoDB
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['ab101group4']

restaurantCategoryDic={
  "roast_chicken": {
    "categoryNameCh": "烤雞/烤鴨",
    "categoryNameEng": "roast_chicken",
    "varName": "blog_cnt_by_roast_chicken"
  },
  "barbecue": {
    "categoryNameCh": "串燒/碳烤/居酒屋/燒烤",
    "categoryNameEng": "barbecue",
    "varName": "blog_cnt_by_barbecue"
  },
  "seafood": {
    "categoryNameCh": "海產/熱炒餐廳",
    "categoryNameEng": "seafood",
    "varName": "blog_cnt_by_seafood"
  },
  "brunch": {
    "categoryNameCh": "美式餐廳/早午餐",
    "categoryNameEng": "brunch",
    "varName": "blog_cnt_by_brunch"
  },
  "banquet": {
    "categoryNameCh": "合菜",
    "categoryNameEng": "banquet",
    "varName": "blog_cnt_by_banquet"
  },
  "bar": {
    "categoryNameCh": "酒吧/餐酒館",
    "categoryNameEng": "bar",
    "varName": "blog_cnt_by_bar"
  },
  "japanese_food": {
    "categoryNameCh": "日式料理",
    "categoryNameEng": "japanese_food",
    "varName": "blog_cnt_by_japanese_food"
  },
  "continental_food": {
    "categoryNameCh": "義式/歐風/異國",
    "categoryNameEng": "continental_food",
    "varName": "blog_cnt_by_continental_food"
  },
  "southeast_asia_food": {
    "categoryNameCh": "東南亞料理",
    "categoryNameEng": "southeast_asia_food",
    "varName": "blog_cnt_by_southeast_asia_food"
  },
  "mutton_beef_hotpot": {
    "categoryNameCh": "羊肉爐/牛肉湯",
    "categoryNameEng": "mutton_beef_hotpot",
    "varName": "blog_cnt_by_mutton_beef_hotpot"
  },
  "chophouse": {
    "categoryNameCh": "牛排館/鐵板燒",
    "categoryNameEng": "chophouse",
    "varName": "blog_cnt_by_chophouse"
  },
  "korea_food": {
    "categoryNameCh": "韓式料理",
    "categoryNameEng": "korea_food",
    "varName": "blog_cnt_by_korea_food"
  },
  "vegetable_food": {
    "categoryNameCh": "素食/蔬食",
    "categoryNameEng": "vegetable_food",
    "varName": "blog_cnt_by_vegetable_food"
  },
  "hongKong_food": {
    "categoryNameCh": "港式餐廳",
    "categoryNameEng": "hongKong_food",
    "varName": "blog_cnt_by_hongkong_food"
  },
  "dessert_ice_drink_bakery": {
    "categoryNameCh": "甜點/冰品/飲料/烘培",
    "categoryNameEng": "dessert_ice_drink_bakery",
    "varName": "blog_cnt_by_dessert_ice_drink_bakery"
  },
  "themed_restaurant": {
    "categoryNameCh": "主題/景觀餐廳",
    "categoryNameEng": "themed_restaurant",
    "varName": "blog_cnt_by_themed_restaurant"
  },
  "taiwanese_Food": {
    "categoryNameCh": "台式/中式/小吃",
    "categoryNameEng": "taiwanese_Food",
    "varName": "blog_cnt_by_taiwanses_food"
  },
  "buffet": {
    "categoryNameCh": "自助餐",
    "categoryNameEng": "buffet",
    "varName": "blog_cnt_by_buffet"
  },
  "hotpot": {
    "categoryNameCh": "鍋類",
    "categoryNameEng": "hotpot",
    "varName": "blog_cnt_by_hotpot"
  },
  "light_meal_afternoon_tea": {
    "categoryNameCh": "咖啡/輕食/下午茶",
    "categoryNameEng": "light_meal_afternoon_tea",
    "varName": "blog_cnt_by_light_meal_afternoon_tea"
  }
}
# 將字典存入MongoDB
Stime=time.time()
restaurantCategory = db.restaurantCategory
restaurantCategory.insert_one(restaurantCategoryDic)
print db.restaurantCategory.find()[0]


    
Etime=time.time()
print '共花 ',Etime-Stime,' 秒'