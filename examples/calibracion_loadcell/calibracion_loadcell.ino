#include "HX711.h"

#define DOUT  3
#define CLK  2

HX711 scale;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  scale.begin(DOUT, CLK);
  scale.set_scale();
  scale.tare();

  Serial.println("Pon el peso en 5 segundos empiezo");
  delay(5000);

  double valores =(double)scale.get_units(10)/1000;
  
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("Reading: ");
  Serial.print(scale.get_units(), 1);
  Serial.print(" kgs"); //Change this to kg and re-adjust the calibration factor if you follow SI units like a sane person
  Serial.println();
}
