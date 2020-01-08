
from SerialConnection import SerialConnection
from serial import Serial

class WiredConnection(SerialConnection):
	def __init__ (self, file_path = '/dev/serial0', baudrate = 115200):
		SerialConnection.__init__(self, file_path = file_path, baudrate = baudrate)
		self.serial_connection = None
				
	def connect(self):
		self.serial_connection = Serial(self.file_path, baudrate=self.baudrate, timeout=1)
		
	def disconnect(self):
		self.serial_connection.close()
		self.serial_connection = None
	
	def internal_read(self):
		new_line = self.serial_connection.readline()
		return new_line.decode("utf-8")

		
