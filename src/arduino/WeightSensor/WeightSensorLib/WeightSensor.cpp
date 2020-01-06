
#include "WeightSensor.h"

WeightSensor::WeightSensor(int DOUT, int CLK){
  this->DOUT = DOUT;
  this->CLK = CLK;
  this->offset = 5;                 //At first values larger than offset Kg will have offset Kg less than measured
  this->offset_counter_target = 5;
  this->offset_counter = 0;
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
  const float measure = this->rawRead();
  const float filtered_measure = this->filter->filter(measure>100?measure:0);
  const float kg_measure = (filtered_measure>100?filtered_measure:0)/1000;
  if (kg_measure < this->offset) {
    if (this->offset_counter >= this->offset_counter_target){
      this->offset = kg_measure;
      this->offset_counter = 0;
    }else{
      ++this->offset_counter;
    }
  }else if (this->offset_counter>0){
    --this->offset_counter;
  }
  const float offset_measure = kg_measure - this->offset;
  return offset_measure>0?offset_measure:0;
}
