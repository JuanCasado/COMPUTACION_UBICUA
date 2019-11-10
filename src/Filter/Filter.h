
#pragma once
#include "Arduino.h"

class Filter {
  public:
    Filter (int len);
    void init();
    float filter(float measure);
  private:
    float lowPassFilter();
    float* data;
    int len;
    int index = 0;
};