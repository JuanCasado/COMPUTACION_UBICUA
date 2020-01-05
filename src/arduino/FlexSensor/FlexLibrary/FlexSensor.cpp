
#include "FlexSensor.h"

FlexSensor::FlexSensor(int pin, float voltage, int resistor, int flex_resistance, int straight_resistance, int filter_len){
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
	float analog_voltage = this->rawRead();
	float flex_voltage = analog_voltage * this->voltage / 1023.0;
	float flex_resistor = this->resistor * (this->voltage / flex_voltage - 1.0);
	//return flex_resistor;
	float angle = map(constrain(flex_resistor, this->flex_resistance, this->straight_resistance), this->flex_resistance, this->straight_resistance, 100, 0);
	return this->filter->filter(angle);
}

float FlexSensor::rawRead() {
	return analogRead(this->pin);
}