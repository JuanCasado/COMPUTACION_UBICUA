
#pragma once
#include "Filter.h"

class Sensor {
public:
  virtual void init ();
  virtual float rawRead();
  virtual float read ();
};