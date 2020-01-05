
#pragma once
#include "Arduino.h"

class Led {
public:
  Led (int pin, bool state = false);
  void init();
  void changeState();
  void setState(bool state);
  void setValue(int value);
  bool getState();
  int getValue();
  bool isDigital();
private:
  int pin;
  bool digital;
  bool state;
  int value;
};