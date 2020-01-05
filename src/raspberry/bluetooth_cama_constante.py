
import os
import serial
import time
import json
import requests
import sys

conectado = 0
url = "http://172.22.38.145:8080"
mac_taget = "98::D3::32::31:B8::3C"
running = True

while running:
	if not conectado:
		try:
			os.system('sudo rfcomm connect '+mac_taget)
			bluetoothSerial= serial.Serial("/dev/rfcomm0", baudrate=115200)
			print("Bluetooth connected")
			conectado = 1
			time.sleep(1)
		except KeyboardInterrupt:
			running = False
		except:
			print("Unexpected error:", sys.exc_info()[0])
			print('Connection not established')
	else:
		try:
			print("Printeando")
			#data = json.loads(bluetoothSerial.readline()))
			#data = bluetoothSerial.readline()
			data = bluetoothSerial.readline()
			data = data.decode("utf-8")
			
			print(data)
			data = json.loads(data)
			
			answer = "{"
			for idx,key in enumerate(data):
				value = data[key]
				answer += key + ": {"
				answer += "Valor:" + str(value) + ","
				answer += "Timestamp: " + str(time.time())
				answer += "}"
				if idx != (len(data)-1):
						answer += ","
			answer += "}"
			
			time.sleep(1)
			
			r = requests.post(url,answer)
			print(r)
		except KeyboardInterrupt:
			running = False
