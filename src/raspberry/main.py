
#from WiredConnection import WiredConnection
from BluetoothConnection import BluetoothConnection
from RestSender import RestSender, Recivers
from RestReciver import RestReciver
from JSONFormater import formatToJsonMap, DataType
from Sounds import Songs, playSong
import RPi.GPIO as GPIO


if __name__=='__main__':
	led_state = 0
	LED=14
	GPIO.setmode(GPIO.BCM)
	GPIO.setwarnings(False)
	GPIO.setup(LED, GPIO.OUT, initial=led_state)
	device_name = 'SmartBed1'
	#serial_connection = WiredConnection()
	serial_connection = BluetoothConnection()
	rest_sender = RestSender()
	rest_reciver = RestReciver()
	serial_connection.connect()
	if not rest_reciver.user_exists(device_name):
		rest_sender.add_user(device_name).text
	while True:
		raw_data = serial_connection.read()
		print(raw_data)
		formated_data = formatToJsonMap(raw_data, device_name)
		if formated_data != None:
			rest_sender.send(formated_data[DataType.FLEX.value], Recivers.FLEX.value)
			rest_sender.send(formated_data[DataType.POSITION.value], Recivers.POSITION.value)
			rest_sender.send(formated_data[DataType.TEMPERATURE.value], Recivers.TEMPERATURE.value)
			rest_sender.send(formated_data[DataType.HUMIDITY.value], Recivers.HUMIDITY.value)
			rest_sender.send(formated_data[DataType.NOISE.value], Recivers.NOISE.value)
			rest_sender.send(formated_data[DataType.LIGHT.value], Recivers.LIGHT.value)
			rest_sender.send(formated_data[DataType.WEIGHT.value], Recivers.WEIGHT.value)
			if formated_data[DataType.SOUND.value]:
				playSong(Songs.EXPLOSION.value)
		if rest_reciver.get_alarm(device_name):
			playSong(Songs.ALARM.value)
		GPIO.output(LED, led_state)
		led_state = not led_state

