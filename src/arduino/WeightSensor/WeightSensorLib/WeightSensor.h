
#pragma once
#include "HX711.h"
#include "Sensor.h"

class WeightSensor : public Sensor{
public:
  WeightSensor(int DOUT, int CLK);
  void init ();
  float rawRead();
  float read ();
private:
  int DOUT;
  int CLK;
  HX711 scale;
  Filter *filter;
};