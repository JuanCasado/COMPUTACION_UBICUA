
#include "AmbientSensor.h"

AmbientSensor *ambient_sensor = new AmbientSensor(44);

void setup () {
  Serial.begin(115200);
  ambient_sensor->init();
}

void loop () {
  Serial.println(printAmbient());
}

String printAmbient () {
  return String("\"Temperature\": ") + 
  String(ambient_sensor->readTemperature()) + 
  String(", ") +
  String("\"Humidity\": ") + 
  String(ambient_sensor->readHumidity());
}
