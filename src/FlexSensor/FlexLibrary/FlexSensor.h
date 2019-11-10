
#pragma once
#include "Sensor.h"
class FlexSensor : public Sensor{
  public:
    FlexSensor (int pin,
                int voltage=5,
                int resistor=10000,
                int flex_resistance=1000,
                int straight_resistance=2900,
                int filter_len=4);
    void init();
    //Takes a measure of the sensor and pass it by the filter.
    float read();
    float rawRead();
  private:
    int pin;
    int voltage;
    int resistor;
    int flex_resistance;
    int straight_resistance;

    Filter* filter;
};