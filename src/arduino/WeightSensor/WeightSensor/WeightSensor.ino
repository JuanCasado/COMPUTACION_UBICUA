#include "WeightSensor.h"

WeightSensor* weight_sensor = new WeightSensor ();

void setup() {
  Serial.begin(115200);
  weight_sensor->init();  
}

void loop() {
  printWeight();
  delay(1000);
}

void printWeight () {
  Serial.print("Weight:");
  Serial.print(weight_sensor->read());
  Serial.println("");
}
