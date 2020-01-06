
import requests
import datetime
import json
from enum import Enum

class Recivers (Enum):
	FLEX = 'flex'
	WEIGHT = 'weight'
	TEMPERATURE = 'temperature'
	HUMIDITY = 'humidity'
	NOISE = 'noise'
	LIGHT = 'light'
	POSITION = 'position'
	USER = 'user'

class RestSender:
	def __init__(self, url= 'http://163.172.80.168:8080/'):
		self.url = url
		
	def send(self, content, to):
		return requests.post(self.url + to, content)
		
	def add_user (self, user_name):
		user = {}
		user['userId'] = user_name
		user['name'] = user_name
		user['age'] = 0
		user['mail'] = user_name+'@'+user_name+'.com'
		user['passw'] = user_name
		user['created'] = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S')
		return self.send(user, Recivers.USER.value)
		
		
		
