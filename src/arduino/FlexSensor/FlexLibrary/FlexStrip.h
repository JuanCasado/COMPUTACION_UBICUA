
#pragma once
#include "FlexSensor.h"
class FlexStrip {
  public:
    FlexStrip(int sensor_amount, int* sensor_pin, 
              float voltage=5,
              int resistor=10000,
              int flex_resistance=4700,
              int straight_resistance=4600,
              int filter_len=4);
    void init();

    //Provides the amount of sensors
    int size();

    //Allows access to processed sensor data, by sensor or all at the same time
    float read(int sensor);
    void read(float* sensors);

    //Allows access to raw sensor data, by sensor or all at the same time
    float rawRead(int sensor);
    void rawRead(float* sensors);

    //Get heat function
    float* updateHeatLine();
    float* getHeatLine();
    int heatSize();

  private:
    int len;
    FlexSensor** sensor;
    void addValue (int index, float value);
    void clear ();

    //Sensor measures are stored here to be processed
    int heat_len;
    float* heat_line;
};