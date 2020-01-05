
import json
import time
from enum import Enum

class DataType(Enum):
	FLEX = 'Flex'
	TEMPERATURE = 'Temperature'
	HUMIDITY = 'Humidity'
	SOUND = 'Sound'
	LIGHT = 'Light'
	WEIGHT = 'Weight'
	POSITION = 'Position'

def formatToJsonMap (data, device_name):
	timestamp = str(time.time())
	output_map = None
	try:
		json_data = json.loads(data)
		output_map = {}
		output_map[DataType.FLEX.value] = formatFlex (json_data[DataType.FLEX.value], timestamp, device_name)
		output_map[DataType.POSITION.value] = formatPosition (json_data[DataType.FLEX.value], timestamp, device_name)
		output_map[DataType.TEMPERATURE.value] = formatFlex (json_data[DataType.TEMPERATURE.value], timestamp, device_name)
		output_map[DataType.HUMIDITY.value] = formatFlex (json_data[DataType.HUMIDITY.value], timestamp, device_name)
		output_map[DataType.SOUND.value] = formatFlex (json_data[DataType.SOUND.value], timestamp, device_name)
		output_map[DataType.LIGHT.value] = formatFlex (json_data[DataType.LIGHT.value], timestamp, device_name)	
		output_map[DataType.WEIGHT.value] = formatFlex (json_data[DataType.WEIGHT.value], timestamp, device_name)
	except json.decoder.JSONDecodeError:
		pass
	return output_map
	
def formatFlex (data, timestamp, device_name):
	json_flex = {}
	json_flex['userId'] = device_name
	json_flex['captured'] = timestamp
	json_flex['captured'] = value = data
	return json_flex

def formatPosition (data, timestamp, device_name):
	
	return ''

	
def formatTemperature (data, timestamp, device_name):
	return ''
	
def formatHumidity (data, timestamp, device_name):
	return ''

def formatSound (data, timestamp, device_name):
	return ''

def formatLight (data, timestamp, device_name):
	return ''

def formatWeight (data, timestamp, device_name):
	return ''
	
