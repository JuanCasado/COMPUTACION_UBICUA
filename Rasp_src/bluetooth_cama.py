#mac_taget = "98::D3::32::31:B8::3C"
import os
import serial
import time

try:
    os.system('sudo rfcomm connect hci0 98:D3:32:31:B8:3C 1')
    print('')
except:
    print('No se podido conectar')
time.sleep(1)

bluetoothSerial= serial.Serial("/dev/rfcomm0", baudrate=115200)
print("Bluetooth connected")

try:
    while 1:
        print("Printeando")
        data = bluetoothSerial.readline()
        print(data)
        time.sleep(1)
        
except KeyboardInterrupt:
    print("Quiting...")