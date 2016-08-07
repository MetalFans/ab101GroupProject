from django.test import TestCase

# Create your tests here.

# import
from pymongo import MongoClient
import json
#Def
def jsonDump(dataIn):
    print json.dumps(dataIn,ensure_ascii=False).encode('utf-8')


client = MongoClient('localhost', 27017)
db = client['ab101group4']
testCollection = db.testCollection
#print testCollection.count()

testCollection2=testCollection.find({display_name:1}).limit(10).sort({'page_rank':1})






