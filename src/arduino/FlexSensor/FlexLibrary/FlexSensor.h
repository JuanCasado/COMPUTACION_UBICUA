
#pragma once
#include "Sensor.h"
class FlexSensor : public Sensor{
  public:
    FlexSensor (int pin,float voltage,int resistor,
                int flex_resistance,int straight_resistance,
                int filter_len);
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