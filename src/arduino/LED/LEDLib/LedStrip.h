
#pragma once
#include "Led.h"

class LedStrip {
public:
  LedStrip(int led_amount, int *pins);
  void init();
  void changeState();
  void setState(bool *state);
  void setValue(int *value);
  void setValue(float *value);
private:
  Led **led_strip;
  int len;
};