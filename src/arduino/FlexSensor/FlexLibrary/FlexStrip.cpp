
#include "FlexStrip.h"

FlexStrip::FlexStrip(int sensor_amount, int* sensor_pin, float voltage, int resistor, int flex_resistance, int straight_resistance, int filter_len){
  this->len = sensor_amount;
  this->sensor = (FlexSensor**) malloc(this->len * sizeof(FlexSensor*));
  this->heat_len = (this->len*2+1);
  this->heat_line = (float*) malloc(this->heat_len * sizeof(float));
  for (int i = 0; i < this->len; ++i){
    this->sensor[i] = new FlexSensor(sensor_pin[i], voltage, resistor, flex_resistance, straight_resistance, filter_len);
  }
}

void FlexStrip::init(){
  for (int i = 0; i < this->len; ++i){
    this->sensor[i]->init();
  }
}

int FlexStrip::size(){
  return this->len;
}

float FlexStrip::read(int sensor){
  return this->sensor[sensor]->read();
}

void FlexStrip::read(float* sensors){
  for (int i = 0; i < this->len; ++i){
    sensors[i] = this->sensor[i]->read();
  }
}

float FlexStrip::rawRead(int sensor){
  return this->sensor[sensor]->rawRead();
}

void FlexStrip::rawRead(float* sensors){
  for (int i = 0; i < this->len; ++i){
    sensors[i] = this->sensor[i]->rawRead();
  }
}

void FlexStrip::addValue (int index, float value){
  this->heat_line[index] = constrain(value + this->heat_line[index], 0, 100);
  //this->heat_line[index] = value + this->heat_line[index];
}
void FlexStrip::clear (){
  for (int i = 0; i < this->heat_len; ++i){
    this->heat_line[i] = 0;
  }
}

float* FlexStrip::updateHeatLine() {
  this->clear();
  for (int i = 0; i < this->len; ++i){
    float measure = this->read(i);
    float gaussian_measure = measure*0.6;
    int lower_index = i*2;
    this->addValue(lower_index, gaussian_measure);
    this->addValue(lower_index+1, measure);
    this->addValue(lower_index+2, gaussian_measure);
  }
  return this->heat_line;
}

float* FlexStrip::getHeatLine() {
  return this->heat_line;
}

int FlexStrip::heatSize(){
  return this->heat_len;
}