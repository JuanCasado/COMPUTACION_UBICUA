
#include "AmbientSensor.h"

AmbientSensor::AmbientSensor (int pin) {
  this->filter_t = new Filter(4);
  this->filter_h = new Filter(4);
  this->dht = new DHT(pin, DHT11);
}

void AmbientSensor::init() {
  this->dht->begin();
  this->filter_t->init();
  this->filter_h->init();
}

float AmbientSensor::rawReadTemperature(){
  return this->dht->readTemperature(false);
}

float AmbientSensor::readTemperature(){
  return this->filter_t->filter(this->rawReadTemperature());
}

float AmbientSensor::rawReadHumidity(){
  return this->dht->readHumidity(false);
}

float AmbientSensor::readHumidity(){
  return this->filter_h->filter(this->rawReadHumidity());
}
