
#include "flex_sensor.h"

FlexSensor::FlexSensor(int pin, int voltage, int resistor, int flex_resistence, int straight_resistance){
    this.pin = pin;
    this.voltage = voltage;
    this.resistor = resistor;
    this.flex_resistence = flex_resistence;
    this.straight_resistance = straight_resistance;
}

void FlexSensor::init(){
    pinMode(this.pin, INPUT);
}

float FlexSensor::measure(){
    int analog_volatge = analogRead(this.pin);
    float flex_voltage = analog_voltage * this.voltage / 1023.0;
    float flex_resistor = this.resistor * (this.voltage / flex_voltage - 1.0);
    float angle = map(flex_resistor, this.straight_resistance, this.map_resistance, 0, 90.0);
    return angle;
}