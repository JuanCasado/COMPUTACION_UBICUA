
#pragma once
#include "Arduino.h"

class Display {
public:
  Display(int pinA, int pinB, int pinC, int pinD, int pinE);
  void init();
  void setNumber(byte number);
  void setDot(bool active);
private:
  void setNumber (bool A, bool B, bool C, bool D);
  int pinA;
  int pinB;
  int pinC;
  int pinD;
  int pinE;
};