
#include "Led.h"

Led::Led (int pin, bool state){
  this->pin = pin;
  this->state = state;
  this->digital = true;
}

void Led::init () {
  pinMode(this->pin, OUTPUT);
}

void Led::changeState(){
  this->setState(!this->state);
}

void Led::setState(bool state){
  this->state = state;
  this->digital = true;
  digitalWrite(this->pin, state);
}

void Led::setValue(int value){
  this->digital = false;
  this->value = value;
  analogWrite(this->pin, this->value);
}

bool Led::getState(){
  return this->state;
}

int Led::getValue(){
  return this->value;
}

bool Led::isDigital(){
  return this->digital;
}
