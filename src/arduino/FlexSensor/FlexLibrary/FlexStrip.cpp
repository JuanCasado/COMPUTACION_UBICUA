
#include "FlexStrip.h"

FlexStrip::FlexStrip(int sensor_amount, int* sensor_pin){
  this->len = sensor_amount;
  this->sensor = (FlexSensor**) malloc(this->len * sizeof(FlexSensor*));
  this->heat_len = (this->len*2+1);
  this->heat_line = (float*) malloc(this->heat_len * sizeof(float));
  for (int i = 0; i < this->len; ++i){
    this->sensor[i] = new FlexSensor(sensor_pin[i]);
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

float* FlexStrip::getHeatLine() {
  for (int i = 0; i < this->heat_len; ++i){
    this->heat_line[i] = 0;
  }
  for (int i = 0; i < this->len; ++i){
    float measure = this->read(i);
    float gaussian_measure = measure*0.7;
    int lower_index = i*2;
    this->heat_line[lower_index] += gaussian_measure;
    this->heat_line[lower_index+1] += measure;
    this->heat_line[lower_index+2] += gaussian_measure;
  }
  return this->heat_line;
}
int FlexStrip::heatSize(){
  return this->heat_len;
}