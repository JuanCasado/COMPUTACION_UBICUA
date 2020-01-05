
#include "Display.h"

Display::Display(int pinA, int pinB, int pinC, int pinD, int pinE) {
  this->pinA = pinA;
  this->pinB = pinB;
  this->pinC = pinC;
  this->pinD = pinD;
  this->pinE = pinE;
}

void Display::init(){
  pinMode(this->pinA, OUTPUT);
  pinMode(this->pinB, OUTPUT);
  pinMode(this->pinC, OUTPUT);
  pinMode(this->pinD, OUTPUT);
  pinMode(this->pinE, OUTPUT);
  this->setNumber(0,0,0,0);
  this->setDot(false);
}

void Display::setNumber(byte number){
  byte formated_number = number - '0';
  switch (formated_number){
    case 0: this->setNumber(0,0,0,0); break;
    case 1: this->setNumber(0,0,0,1); break;
    case 2: this->setNumber(0,0,1,0); break;
    case 3: this->setNumber(0,0,1,1); break;
    case 4: this->setNumber(0,1,0,0); break;
    case 5: this->setNumber(0,1,0,1); break;
    case 6: this->setNumber(0,1,1,0); break;
    case 7: this->setNumber(0,1,1,1); break;
    case 8: this->setNumber(1,0,0,0); break;
    case 9: this->setNumber(1,0,0,1); break;
    default: this->setNumber(1,1,1,1); break;
  }
}

void Display::setNumber(bool A,bool B, bool C, bool D){
  digitalWrite(pinA, A);
  digitalWrite(pinB, B);
  digitalWrite(pinC, C);
  digitalWrite(pinD, D);
}

void Display::setDot(bool active){
  digitalWrite(this->pinE, !active);
}