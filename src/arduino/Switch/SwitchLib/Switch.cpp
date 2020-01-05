
#include "Switch.h"

Switch::Switch(int pin) {
  this->pin = pin;
}

void Switch::init(){
  pinMode(this->pin, INPUT_PULLUP);
}

bool Switch::read() {
  return digitalRead(this->pin);
}
