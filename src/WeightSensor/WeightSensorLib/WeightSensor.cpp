
#include "WeightSensor.h"

void WeightSensor::init (){
  this->scale.begin(this->DOUT, this->CLK);
  this->scale.set_scale();
  this->scale.tare();
  this->filter = new Filter(5);
  this->filter->init();
}

float WeightSensor::rawRead() {
  return scale.get_units();
}

float WeightSensor::read () {
  float measure = (-this->rawRead())-150;
  return this->filter->filter(measure>0?measure:0);
}
