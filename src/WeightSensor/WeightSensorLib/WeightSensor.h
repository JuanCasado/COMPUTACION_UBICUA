
#pragma once
#include "HX711.h"
#include "Sensor.h"

class WeightSensor : public Sensor{
public:
  void init ();
  float rawRead();
  float read ();
private:
  const int DOUT = 3;
  const int CLK = 2;
  const HX711 scale;
  const Filter *filter;
};