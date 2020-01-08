
from WiredConnection import WiredConnection
import os

class BluetoothConnection (WiredConnection):
	def __init__(self, file_path = '/dev/rfcomm0', device_name= '98:D3:32:31:B8:3C', baudrate = 115200):
		WiredConnection.__init__(self, file_path = file_path, baudrate = baudrate)
		self.device_name = device_name
		#os.system('sudo rfcomm connect hci0 '+ self.device_name +' 1')
