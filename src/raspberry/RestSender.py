
import requests
from enum import Enum

class Recivers (Enum):
	FLEX = 'flex'
	WEIGHT = 'weight'
	TEMPERATURE = 'temperature'
	HUMIDITY = 'humidity'
	SOUND = 'sound'
	LIGHT = 'light'

class RestSender:
	def __init__(self, url= 'http://172.22.38.145:8080/'):
		self.url = url
		
	def send(self, content, to):
		return requests.post(self.url + to, content)
		
		
