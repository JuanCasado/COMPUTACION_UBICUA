
#include "LightSensor.h"

LightSensor::LightSensor (int pin) {
  this->pin = pin;
  this->filter = new Filter(4);
}

void LightSensor::init() {
  this->filter->init();
}

float LightSensor::rawRead(){
  return analogRead(this->pin);
}

float LightSensor::read(){
  const float measure = this->rawRead();
  const float formated_measure = map(constrain(1023 - measure,0, 1023), 0, 1023, 0, 100);
  return this->filter->filter(formated_measure);
}