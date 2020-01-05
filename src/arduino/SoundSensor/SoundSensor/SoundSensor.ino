
#include "SoundSensor.h"

SoundSensor *sound_sensor = new SoundSensor(A5);

void setup () {
  Serial.begin(115200);
  sound_sensor->init();
}

void loop () {
  Serial.println(printSound());
}

String printSound () {
  return String("\"Sound\": ") + 
  String(sound_sensor->read());
}
