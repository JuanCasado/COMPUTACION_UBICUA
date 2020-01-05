
#pragma once
#include "Arduino.h"

class Switch {
public:
  Switch(int pin);
  void init();
  bool read();
private:
  int pin;
};