#include "FlexStrip.h"

int flex_pins[] = {A0, A1, A2, A3, A4, A5};
FlexStrip* flex_strip = new FlexStrip(5, flex_pins);

void setup() {
  Serial.begin(115200);
  flex_strip->init();
}

void loop() {
  //printRaw();
  //printRead();
  printHeat();
  delay(1000);
}

void printRaw () {
  Serial.print("Raw [");
  for (int i = 0; i < flex_strip->size(); ++i){
    Serial.print(flex_strip->rawRead(i));
    Serial.print(", ");
  }
  Serial.println("]");
}

void printRead () {
  Serial.print("Filtered [");
  for (int i = 0; i < flex_strip->size(); ++i){
    Serial.print(flex_strip->read(i));
    Serial.print(", ");
  }
  Serial.println("]");
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
