
#include "SerialDisplay.h"

SerialDisplay::SerialDisplay(int displays_len, int *pinsA, int *pinsB, int *pinsC, int *pinsD, int *pinsE) {
  this->len  = displays_len;
  this->reading = false;
  this->displays = (Display**)malloc(this->len * sizeof(Display*));
  for (int i = 0; i < this->len; ++i){
    this->displays[i] = new Display(pinsA[i], pinsB[i], pinsC[i], pinsD[i], pinsE[i]);
  }
}

void SerialDisplay::init() {
  for (int i = 0; i < this->len; ++i){
    this->displays[i]->init();
  }
}

void SerialDisplay::update() {
  const int msg_len = Serial.available();
  if (msg_len > 0){
    if (this->reading) {
      this->updateRead();
    }else{
      const byte msg_fragment = Serial.read();
      if (msg_fragment == 'S') {
        this->reading = true;
        for (int i = 0; i < this->len; ++i){
          this->displays[i]->setDot(false);
        }
      }
    }
  }
}

void SerialDisplay::updateRead() {
  int valid_values_read = 0;
  int i = 0;
  byte msg_fragment;
  bool dot_set = false;
  do {
    byte msg_fragment = Serial.read();
    if (msg_fragment == 'E') {
      break;
    }
    else if (msg_fragment == '.'){
      if (valid_values_read == 0) {
        this->displays[valid_values_read]->setNumber('0');
        ++valid_values_read;
      }
      if (!dot_set){
        this->displays[valid_values_read-1]->setDot(true);
        dot_set = true;
      }
    }
    else if ((msg_fragment >= '0') && (msg_fragment <= '9')) {
      this->displays[valid_values_read]->setNumber(msg_fragment);
      ++valid_values_read;
    }
  } while  ((valid_values_read <= this->len) || (msg_fragment != 'E'));
  for (int i = valid_values_read; i < this->len; ++i){
    this->displays[i]->setNumber('0');
  }
  this->reading = false;
}