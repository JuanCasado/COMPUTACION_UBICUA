
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
  Serial.println(getJSON ());
  delay(1000);
}

String getJSON (){
  return String("{") + printHeat () + String(",") + printWeight () + String("}");
}

String printHeat () {
  float* heat_line = flex_strip->getHeatLine();
  String heat = String("\"Flex\":[");
  for (int i = 0; i < flex_strip->heatSize(); ++i){
    heat += String(heat_line[i]);
    if (i != (flex_strip->heatSize()-1)){
      heat += String(", ");
    }
  }
  heat += String("]");
  return heat;
}

String printWeight () {
  return String("\"Weight\": ") +
  String(weight_sensor->read());
}
