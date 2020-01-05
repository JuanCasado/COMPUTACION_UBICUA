
from WiredConnection import WiredConnection
from RestSender import RestSender, Recivers
from JSONFormater import formatToJsonMap, DataType

if __name__=='__main__':
	device_name = 'SmartBed1'
	serial_connection = WiredConnection()
	rest_sender = RestSender()
	serial_connection.connect()
	while True:
		raw_data = serial_connection.read()
		formated_data = formatToJsonMap(raw_data, device_name)
		rest_sender.send(formated_data[DataType.FLEX.value], Recivers.FLEX.value)
		rest_sender.send(formated_data[DataType.TEMPERATURE.value], Recivers.TEMPERATURE.value)
		rest_sender.send(formated_data[DataType.HUMIDITY.value], Recivers.HUMIDITY.value)
		rest_sender.send(formated_data[DataType.SOUND.value], Recivers.SOUND.value)
		rest_sender.send(formated_data[DataType.LIGHT.value], Recivers.LIGHT.value)
		rest_sender.send(formated_data[DataType.WEIGHT.value], Recivers.WEIGHT.value)
		
		
