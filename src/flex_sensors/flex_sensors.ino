#include "flex_sensor.h"

FlexSensor flex (A0, 5, 10000, 37300, 90000);

void setup() {
  Serial.begin(9600);
  flex.init();
}

void loop() {
  Serial.println(flex.measure());
}
