
#include "Filter.h"

Filter::Filter(int len){
  this->len = len;
}

void Filter::init() {
  this->data = (float*) malloc(this->len * sizeof(float));
  for (int i = 0; i < this->len; ++i){
    this->data[i] = 0;
  }
}

float Filter::filter (float measure){
  //The new measure is placed in the filter.
  this->data[this->index] = measure;
  this->index = (this->index+1)%this->len;
  return this->lowPassFilter();
}

/**
 * Mean, max and min are calculated from data
 * mean - (low + max) is returned
 * We take the average of the measurements without too low or too high values
**/
float Filter::lowPassFilter() {
  int divide_factor = this->len-2;
  float acc = 0;
  float max = this->data[0]/divide_factor;
  float min = this->data[0]/divide_factor;
  for (int i = 0; i < this->len; ++i){
    float value = this->data[i]/divide_factor;
    acc += value;
    if (value > max){
      max = value;
    }else if (value < min){
      min = value;
    }
  }
  acc -= min;
  acc -= max;
  return acc;
}