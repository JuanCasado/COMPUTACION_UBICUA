
import requests
import json
import time
import datetime

class RestReciver:
	def __init__(self, url= 'http://163.172.80.168:8080/'):
		self.url = url

	def user_exists(self, user):
		response = requests.get(self.url+'users/user/'+user)
		body = json.loads(response.text)
		return len(body) > 0

	def get_alarm (self, user):
		response = requests.get(self.url+'alarms/user/'+user)
		body = json.loads(response.text)
		current_hour = int(datetime.datetime.now().strftime('%H'))
		current_minute = int(datetime.datetime.now().strftime('%M'))
		current_seconds = (current_hour+1)*3600 + current_minute*60
		current_day = datetime.datetime.today().weekday()
		for alarm in body:
			print(alarm)
			if abs(current_seconds - alarm['time']) < 60 and alarm['days'][current_day] and alarm['active']:
				if not 'has_ringed' in alarm or not alarm['has_ringed']:
					self.modify_alarm(alarm, 1)
					return True
			else:
				if 'has_ringed' in alarm and alarm['has_ringed']:
					self.modify_alarm(alarm, 0)
		return False

	def modify_alarm(self, alarm, go_to_state):
		alarm['has_ringed'] = go_to_state
		headers={}
		headers['content-type']='application/json'
		print(requests.put(self.url+'alarm/'+alarm['_id'], data=json.dumps(alarm), headers=headers))


if __name__=='__main__':
	rr = RestReciver()
	print(rr.get_alarm('gato'))

