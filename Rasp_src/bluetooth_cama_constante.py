#mac_taget = "98::D3::32::31:B8::3C"
import os
import serial
import time

conectado = 0


while 1:
    if not conectado:
        try:
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
            data = bluetoothSerial.readline()
            print(data)
            time.sleep(1)
                
        except KeyboardInterrupt:
            print("Quiting...")
        except:
            conectado = 0
