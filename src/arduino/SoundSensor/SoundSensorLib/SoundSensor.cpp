
#include "SoundSensor.h"

SoundSensor::SoundSensor (int pin) {
  this->pin = pin;
  this->filter = new Filter(4);
}

void SoundSensor::init() {
  this->filter->init();
  previous_measure = this->rawRead();
}

float SoundSensor::rawRead(){
  return analogRead(this->pin);
}

float SoundSensor::read(){
  const float measure = this->rawRead();
  const float formated_measure = map(constrain(abs(measure - previous_measure),0, 1023), 0, 1023, 0, 100);
  previous_measure = measure;
  return this->filter->filter(formated_measure);
}