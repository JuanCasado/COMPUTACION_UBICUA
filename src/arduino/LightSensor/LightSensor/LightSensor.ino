
#include "LightSensor.h"

LightSensor *light_sensor = new LightSensor(A6);

void setup () {
  Serial.begin(115200);
  light_sensor->init();
}

void loop () {
  Serial.println(printLight());
}

String printLight () {
  return String("\"Light\": ") + 
  String(light_sensor->read());
}
