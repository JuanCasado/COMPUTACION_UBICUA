
import os
import serial
import time
import json
from serial import SerialException

url = "http://172.22.38.145:8080"
#mac_taget = "98::D3::32::31::B8::3C"
#path =  "/dev/rfcomm0"
path = "/dev/serial0"
baudrate = 115200

#os.system('sudo rfcomm connect '+mac_taget+' '+str(baudrate)+' 1')
bluetoothSerial = serial.Serial(path, baudrate=baudrate, timeout=None)
print("Bluetooth connected")

running = True
try:
    while running:
        try:
            data = bluetoothSerial.readline()
            data = data.decode("utf-8")

            print(data)
            '''
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

            r = requests.post(url,answer)
            print(r)
            '''
        except SerialException:
            bluetoothSerial.close()
            bluetoothSerial = serial.Serial(path, baudrate=baudrate, timeout=None)
finally:
    bluetoothSerial.close()