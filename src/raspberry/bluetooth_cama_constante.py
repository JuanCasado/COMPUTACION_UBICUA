#mac_taget = "98::D3::32::31:B8::3C"
import os
import serial
import time
import json
import requests

conectado = 0
url = "http://172.22.38.145:8080"

while 1:
    if not conectado:
        try:
            #Realizamos intento de conexión al arduino
            os.system('sudo rfcomm connect hci0 98:D3:32:31:B8:3C 1')
            bluetoothSerial= serial.Serial("/dev/rfcomm0", baudrate=115200)
            print("Bluetooth connected")
            conectado = 1
            time.sleep(1)
        except:
            print('No se podido conectar')
        
    if conectado:
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
            print("Quiting...")
        """except:
            conectado = 0"""
