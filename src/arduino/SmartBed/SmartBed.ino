
#include "FlexStrip.h"
#include "WeightSensor.h"

int flex_pins[] = {A0, A1, A2, A3, A4, A5};
FlexStrip* flex_strip = new FlexStrip(5, flex_pins);
WeightSensor* weight_sensor = new WeightSensor ();

void setup() {
  Serial.begin(115200);
  flex_strip->init();
  weight_sensor->init();
}

void loop () {
  printHeat();
  printWeight();
  delay(1000);
}

void printHeat () {
  float* heat_line = flex_strip->getHeatLine();
  Serial.print("Flex:[");
  for (int i = 0; i < flex_strip->heatSize(); ++i){
    Serial.print(heat_line[i]);
    Serial.print(", ");
  }
  Serial.println("];");
}

void printWeight () {
  Serial.print("Weight: ");
  Serial.print(weight_sensor->read());
  Serial.println(";");
}
