
#include "WeightSensor.h"

WeightSensor::WeightSensor(int DOUT, int CLK){
  this->DOUT = DOUT;
  this->CLK = CLK;
}

void WeightSensor::init (){
  this->scale.begin(this->DOUT, this->CLK);
  this->scale.wait_ready();
  this->scale.tare();               //Works better with this
  this->scale.set_scale(-1.32);     //Depends on your sensor setup!!!
  this->scale.set_offset(-413000);  //Depends on your sensor setup!!!
  this->filter = new Filter(4);
  this->filter->init();
}

float WeightSensor::rawRead() {
  return scale.get_units(3);
}

float WeightSensor::read () {
  float measure = this->rawRead();
  float filtered_measure = this->filter->filter(measure>100?measure:0);
  return (filtered_measure>100?filtered_measure:0)/1000;
}
