
#include "FlexSensor.h"

FlexSensor::FlexSensor(int pin, int voltage, int resistor, int flex_resistance, int straight_resistance, int filter_len){
	this->pin = pin;
	this->voltage = voltage;
	this->resistor = resistor;
	this->flex_resistance = flex_resistance;
	this->straight_resistance = straight_resistance;
	this->filter = new Filter(filter_len);
}

void FlexSensor::init(){
	pinMode(this->pin, INPUT);
	this->filter->init();
}

float FlexSensor::read(){
	int analog_voltage = analogRead(this->pin);
	float flex_voltage = analog_voltage * this->voltage / 1023.0;
	float flex_resistor = this->resistor * (this->voltage / flex_voltage - 1.0);
	float angle = map(flex_resistor, this->straight_resistance, this->flex_resistance, 0.0, 90.0);
	return this->filter->filter(angle);
}

float FlexSensor::rawRead() {
	return analogRead(this->pin);
}