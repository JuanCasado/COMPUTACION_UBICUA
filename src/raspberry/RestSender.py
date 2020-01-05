
import requests
from enum import Enum

class Recivers (Enum):
	FLEX = 'flex'
	WEIGHT = 'weight'
	TEMPERATURE = 'temperature'
	HUMIDITY = 'humidity'
	SOUND = 'noise'
	LIGHT = 'light'
	POSITION = 'position'

class RestSender:
	def __init__(self, url= 'http://163.172.80.168:8080/'):
		self.url = url
		
	def send(self, content, to):
		return requests.post(self.url + to, content)
		
		
