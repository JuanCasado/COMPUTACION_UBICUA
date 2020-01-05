
#include "WeightSensor.h"

WeightSensor* weight_sensor = new WeightSensor (22, 24);

void setup() {
  Serial.begin(115200);
  weight_sensor->init();
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, led_state);
  Serial.println(printWeight());
}

String printWeight () {
  return String("\"Weight:\"") + 
  String(weight_sensor->read());
}
