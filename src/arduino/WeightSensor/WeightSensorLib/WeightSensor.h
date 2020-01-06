
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
  float offset;
  int offset_counter;
  int offset_counter_target;
  HX711 scale;
  Filter *filter;
};