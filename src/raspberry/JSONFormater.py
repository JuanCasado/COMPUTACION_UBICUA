
import json
import time
from enum import Enum
from math import ceil
import datetime

class DataType(Enum):
	FLEX = 'Flex'
	TEMPERATURE = 'Temperature'
	HUMIDITY = 'Humidity'
	NOISE = 'Noise'
	LIGHT = 'Light'
	WEIGHT = 'Weight'
	POSITION = 'Position'
	SOUND = 'Sound'

def formatToJsonMap (data, device_name):
	timestamp = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S')
	output_map = None
	try:
		json_data = json.loads(data)
		output_map = {}
		output_map[DataType.FLEX.value] = sensorFormat (json_data[DataType.FLEX.value], timestamp, device_name)
		output_map[DataType.POSITION.value] = formatPosition (json_data[DataType.FLEX.value], json_data[DataType.WEIGHT.value], timestamp, device_name)
		output_map[DataType.TEMPERATURE.value] = sensorFormat (json_data[DataType.TEMPERATURE.value], timestamp, device_name)
		output_map[DataType.HUMIDITY.value] = sensorFormat (json_data[DataType.HUMIDITY.value], timestamp, device_name)
		output_map[DataType.NOISE.value] = sensorFormat (json_data[DataType.NOISE.value], timestamp, device_name)
		output_map[DataType.LIGHT.value] = sensorFormat (json_data[DataType.LIGHT.value], timestamp, device_name)	
		output_map[DataType.WEIGHT.value] = sensorFormat (json_data[DataType.WEIGHT.value], timestamp, device_name)
		output_map[DataType.SOUND.value] = int(json_data[DataType.SOUND.value])
	except json.decoder.JSONDecodeError:
		pass
	return output_map
	
def sensorFormat (data, timestamp, device_name):
	json = {}
	json['userId'] = device_name
	json['captured'] = timestamp
	json['value'] = data
	return json

def formatPosition (flex, weight, timestamp, device_name):
	if (max(flex) < 40 or weight < 10):
		position='Empty'
		style=''
	else:
		#Calculate position
		left_cut_index = ceil(len(flex)*0.3)
		right_cut_index = len(data)-left_cut_index
		left   = sum([flex[i] for i in range(0, left_cut_index)])
		center = sum([flex[i] for i in range(left_cut_index, right_cut_index)])
		right  = sum([flex[i] for i in range(right_cut_index, len(data))])
		best_value = max(left, center, right)
		if best_value == left:
			position = 'Left'
		elif best_value == right:
			position = 'Right'
		else:
			position = 'Center'
		#Calculate style
		if sum(flex) > 55*len(flex):
			style = 'Spread'
		else:
			style = 'NotSpread'
	#Create JSON
	json = {}
	json['userId'] = device_name
	json['captured'] = timestamp
	json['position'] = position+'-'+style
	return json
	
