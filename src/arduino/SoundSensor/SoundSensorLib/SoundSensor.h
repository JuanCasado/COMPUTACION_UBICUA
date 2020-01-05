
#pragma once
#include "Sensor.h"

class SoundSensor : public Sensor {
  public:
    SoundSensor(int pin);
    void init();
    float read();
    float rawRead();
  private:
    int pin;
    float previous_measure;
    Filter *filter;
};