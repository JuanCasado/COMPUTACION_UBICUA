
#include "SerialDisplay.h"
#include "Led.h"

#define LED_BLINK 250
unsigned long last_time = millis();
int serial_display_pinsA[] = {A3,  4, 10};
int serial_display_pinsB[] = {A1,  3, 9};
int serial_display_pinsC[] = {A0,  2, 8};
int serial_display_pinsD[] = {A2,  5, 11};
int serial_display_pinsE[] = {A4,  6, 12};
SerialDisplay *serial_display = new SerialDisplay(3, serial_display_pinsA, serial_display_pinsB, serial_display_pinsC, serial_display_pinsD, serial_display_pinsE);
Led *loop_led = new Led(A5);

void setup () {
  Serial.begin(115200);
  serial_display->init();
  loop_led->init();
}

void loop () {
  serial_display->update();
  if (millis()-last_time > LED_BLINK){
    loop_led->changeState();
    last_time = millis();
  }
}
