
#include "LedStrip.h"

LedStrip::LedStrip(int led_amount, int *pins){
  this->len = led_amount;
  this->led_strip = (Led**) malloc(this->len * sizeof(Led*));
  for (int i = 0; i < this->len; ++i){
    this->led_strip[i] = new Led(pins[i]);
  }
}

void LedStrip::init(){
  for (int i = 0; i < this->len; ++i){
    this->led_strip[i]->init();
  }
}

void LedStrip::changeState(){
  for (int i = 0; i < this->len; ++i){
    this->led_strip[i]->changeState();
  }
}

void LedStrip::setState(bool *state){
  for (int i = 0; i < this->len; ++i){
    this->led_strip[i]->setState(state[i]);
  }
}

void LedStrip::setValue(float *value){
  int *led_values = (int*) malloc(this->len * sizeof(int));
  for (int i = 0; i < this->len; ++i){
    led_values[i] = (int) map(constrain(value[i], 0, 100), 0, 100, 0, 255);
  }
  this->setValue(led_values);
}

void LedStrip::setValue(int *value){
  for (int i = 0; i < this->len; ++i){
    this->led_strip[i]->setValue(constrain(value[i], 0 ,255));
  }
}
