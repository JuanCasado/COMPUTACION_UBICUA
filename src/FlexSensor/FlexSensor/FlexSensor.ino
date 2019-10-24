#include "FlexStrip.h"

int flex_pins[] = {A0, A1, A2, A3, A4, A5};
FlexStrip* flex_strip = new FlexStrip(5, flex_pins);

void setup() {
  Serial.begin(9600);
  flex_strip->init();
}

void loop() {
  printRaw();
  //printRead();
  //printHeat();
  delay(1000);
}

void printRaw () {
  for (int i = 0; i < flex_strip->size(); ++i){
    Serial.print("Sensor [");
    Serial.print(i);
    Serial.print("]: ");
    Serial.println(flex_strip->rawRead(i));
  }
}

void printRead () {
  for (int i = 0; i < flex_strip->size(); ++i){
    Serial.print("Sensor [");
    Serial.print(i);
    Serial.print("]: ");
    Serial.println(flex_strip->read(i));
  }
}

void printHeat () {
  float* heat_line = flex_strip->getHeatLine();
  Serial.print("Heat [");
  for (int i = 0; i < flex_strip->heatSize(); ++i){
    Serial.print(heat_line[i]);
    Serial.print(", ");
  }
  Serial.println("]");
}
