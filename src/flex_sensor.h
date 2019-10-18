
#include "Arduino.h"

class FlexSensor {
    public:
        FlexSensor (int pin, int voltage, int resistor, int flex_resistence, int straight_resistance);
        void init();
        float measure();
    private:
        int pin;
        int voltage;
        int resistor;
        int flex_resistence;
        int straight_resistance;
};