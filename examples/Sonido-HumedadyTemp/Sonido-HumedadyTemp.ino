#include "dht.h"
#define dht_apin A0 // Analog Pin sensor is connected to
 
dht DHT;
int LED = 10 ; 
int sensor = 2 ;
void setup(){
 
  Serial.begin(9600);
  delay(500);//Delay to let system boot
  Serial.println("Medidor de temperatura, humedad y detector de sonido. \n\n");
  delay(1000);//Wait before accessing Sensor
 
}//end "setup()"
 
void loop(){
  
  
    bool  valor =  digitalRead(sensor) ; //leemos el estado del sensor
    if ( valor == true ) //Si está activada la salida D0
    {
      digitalWrite(LED, HIGH) ;            
      Serial.print("Se detecta ruido alto. ");
 
    }else{ //Si no esta activada
      digitalWrite(LED, LOW) ;            
      Serial.print("No hay ruido. ");
    }
    //lectura y print de temperatura y humedad
    DHT.read11(dht_apin);
    Serial.print("Humedad del  = ");
    Serial.print(DHT.humidity);
    Serial.print("%  ");
    Serial.print("temperatura: ");
    Serial.print(DHT.temperature); 
    Serial.println("C  ");
    
    delay(2000);
 
}
