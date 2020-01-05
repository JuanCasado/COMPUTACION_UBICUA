

#include "SwitchStrip.h"

SwitchStrip::SwitchStrip(int pin_amount, int *pin) {
  this->len = pin_amount;
  this->switchs = (Switch**) malloc(this->len * sizeof(Switch*));
  for (int i = 0; i < this->len; ++i){
    this->switchs[i] = new Switch(pin[i]);
  }
}

void SwitchStrip::init() {
  for (int i = 0; i < this->len; ++i){
    this->switchs[i]->init();
  }
}

int SwitchStrip::read() {
  for (int i = 0; i < this->len; ++i){
    if(this->switchs[i]->read()){
      return i;
    }
  }
  return this->len;
}
