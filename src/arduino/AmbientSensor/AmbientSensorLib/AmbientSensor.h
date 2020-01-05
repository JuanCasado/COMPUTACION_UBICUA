
#pragma once
#include "Sensor.h"
#include "DHT.h"

class AmbientSensor {
  public:
    AmbientSensor(int pin);
    void init();
    float readTemperature();
    float rawReadTemperature();
    float readHumidity();
    float rawReadHumidity();
  private:
    Filter *filter_t;
    Filter *filter_h;
    DHT *dht; 
};