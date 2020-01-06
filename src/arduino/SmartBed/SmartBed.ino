
#include "FlexStrip.h"
#include "WeightSensor.h"
#include "SoundSensor.h"
#include "AmbientSensor.h"
#include "LightSensor.h"
#include "Led.h"
#include "LedStrip.h"
#include "SwitchStrip.h"
#include "Switch.h"

#define SERIAL_BAUDS 115200
int flex_pins[] = {A2, A3, A4, A1, A0};
int led_pins[] = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
int switch_pins[] = {53, 51, 49, 47, 45};
float voltage = 3.3;

FlexStrip* flex_strip = new FlexStrip(5, flex_pins, voltage);
WeightSensor* weight_sensor = new WeightSensor (22, 24);
AmbientSensor *ambient_sensor = new AmbientSensor(44);
SoundSensor *sound_sensor = new SoundSensor(A5);
LightSensor *light_sensor = new LightSensor(A6);
Led *loop_led = new Led(50);
LedStrip *led_strip = new LedStrip(flex_strip->heatSize(), led_pins);
SwitchStrip *switch_strip = new SwitchStrip(5, switch_pins);
Switch *alarm_switch = new Switch(43);

#define START_ALARM_COUNTDOWN 10
#define CICLES_TO_SKIP 3
int alarm_countdown = START_ALARM_COUNTDOWN;
bool sound_to_send = false;
int cicles = 0;

void setup() {
  Serial.begin(SERIAL_BAUDS);
  Serial1.begin(SERIAL_BAUDS);
  Serial3.begin(SERIAL_BAUDS);
  flex_strip->init();
  weight_sensor->init();
  ambient_sensor->init();
  sound_sensor->init();
  light_sensor->init();
  loop_led->init();
  led_strip->init();
  switch_strip->init();
  alarm_switch->init();
}

void loop () {
  float *heat_line = flex_strip->updateHeatLine();
  float weight = weight_sensor->read();
  float temperature = ambient_sensor->readTemperature();
  float humidity = ambient_sensor->readHumidity();
  float noise = sound_sensor->read();
  float light = light_sensor->read();
  bool make_sound = alarm_switch->read();
  String json = getJSON(weight, temperature, humidity, noise, light, flex_strip, sound_to_send);
  Serial.println(json);
  Serial3.println(json);
  if (make_sound){
    sendBCD(alarm_countdown);
    if (cicles >= CICLES_TO_SKIP){
      cicles = 0;
      if (alarm_countdown <= 0){
        sound_to_send = true;
      }else{
        --alarm_countdown;
      }
    }else{
      ++cicles;
    }
  }else{
    sound_to_send = false;
    alarm_countdown = START_ALARM_COUNTDOWN;
    switch (switch_strip->read()) {
      case 0: sendBCD(weight);      break;
      case 1: sendBCD(temperature); break;
      case 2: sendBCD(humidity);    break;
      case 3: sendBCD(noise);       break;
      case 4: sendBCD(light);       break;
      default: sendBCD(0);          break;
    }
  }
  led_strip->setValue(heat_line);
  loop_led->changeState();
}

void sendBCD(float value) {
  Serial1.write('S');
  if (value <= 0){
    Serial1.print(0);
    Serial1.print(0);
  }
  else if (value < 10){
    Serial1.print(0);
  }
  Serial1.print(value,1);
  Serial1.write('E');
}

String getJSON (float weight, float temperature, float humidity, float noise, float light, FlexStrip *flex_strip, bool make_sound){
  return String("{") +
    printHeat (flex_strip) + String(",") +
    printAmbient (temperature, humidity) + String(",") +
    printNoise (noise) + String(",") +
    printLight (light) + String(",") +
    printSound (make_sound) + String(",") +
    printWeight (weight) +
    String("}");
}

String printHeat (FlexStrip *flex_strip) {
  float *heat_line = flex_strip->getHeatLine();
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

String printWeight (float weight) {
  return String("\"Weight\":") +
  String(weight);
}

String printSound (bool make_sound) {
  return String("\"Sound\":") +
  String((int)make_sound);
}

String printAmbient (float temperature, float humidity) {
  return String("\"Temperature\":") + 
  String(temperature) + 
  String(", ") +
  String("\"Humidity\":") + 
  String(humidity);
}

String printNoise (float noise) {
  return String("\"Noise\":") + 
  String(noise);
}

String printLight (float light) {
  return String("\"Light\": ") + 
  String(light);
}
