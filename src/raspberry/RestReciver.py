
import requests
import json

class RestReciver:
	def __init__(self, url= 'http://163.172.80.168:8080/'):
		self.url = url
		
	def user_exists(self, user):
		response = requests.get(self.url+'users/user/'+user)
		body = json.loads(response.text)
		return len(body) > 0
		
	
	def get_alarm (self, user):
		pass
		
		
