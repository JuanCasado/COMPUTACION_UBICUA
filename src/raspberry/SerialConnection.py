
import time
from serial import SerialException
from abc import ABC, abstractmethod

class SerialConnection(ABC):
	def __init__ (self, file_path, baudrate = 115200):
		ABC.__init__(self)
		self.file_path = file_path
		self.baudrate = baudrate

	@abstractmethod
	def connect (self):
		pass

	@abstractmethod
	def disconnect(self):
		pass

	def reconnect(self):
		self.disconnect()
		time.sleep(1)
		self.connect()

	@abstractmethod
	def internal_read(self):
		pass

	def read(self):
		time.sleep(0.2)
		try:
			return self.internal_read()
		except SerialException:
			self.reconnect()
			return self.internal_read()
