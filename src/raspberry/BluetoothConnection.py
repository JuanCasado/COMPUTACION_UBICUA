
from WiredConnection import WiredConnection
import os
import time

class BluetoothConnection (WiredConnection):
	def __init__(self, file_path = '/dev/rfcomm0', device_name= '98:D3:32:31:B8:3C', baudrate = 115200):
		WiredConnection.__init__(self, file_path = file_path, baudrate = baudrate)
		self.device_name = device_name

	def connect(self):
		os.system('sudo rfcomm bind 0 '+self.device_name+' 1')
		WiredConnection.connect(self)
		time.sleep(1)

	def disconnect(self):
		WiredConnection.disconnect(self)
		os.system('sudo rfcomm release 0')
		time.sleep(1)

if __name__=='__main__':
	bt_connection = BluetoothConnection()
	try:
		bt_connection.connect()
		print(bt_connection.read())
	finally:
		bt_connection.disconnect()
