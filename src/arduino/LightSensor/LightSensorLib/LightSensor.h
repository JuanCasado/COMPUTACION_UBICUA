
#pragma once
#include "Sensor.h"

class LightSensor : public Sensor {
  public:
    LightSensor(int pin);
    void init();
    float read();
    float rawRead();
  private:
    int pin;
    Filter *filter;
};