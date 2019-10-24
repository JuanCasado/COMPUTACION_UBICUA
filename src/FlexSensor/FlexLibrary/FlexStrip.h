
#include "FlexSensor.h"

class FlexStrip {
  public:
    FlexStrip(int sensor_amount, int* sensor_pin);
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
    float* getHeatLine();
    int heatSize();

  private:
    int len;
    FlexSensor** sensor;

    //Sensor measures are stored here to be processed
    int heat_len;
    float* heat_line;
};