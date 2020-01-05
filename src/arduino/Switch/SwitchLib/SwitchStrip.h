
#pragma once
#include "Switch.h"

class SwitchStrip {
public:
  SwitchStrip(int pin_amount, int *pin);
  void init();
  int read();
private:
  Switch **switchs;
  int len;
};