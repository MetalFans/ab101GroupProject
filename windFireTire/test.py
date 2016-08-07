#coding=utf-8

class MyObj:
    def __init__(self, name, number, balance):
        self.name = name
        self.number = number
        self.balance = balance


x = MyObj(1,1,2)
y = MyObj(2,10,3)
z = [x,y]
# vars 轉換成字典
m = map(lambda i: vars(i), z)
print m
# for ele in m:
#     print ele['hotpot']