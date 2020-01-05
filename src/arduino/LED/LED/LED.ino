
#include "Led.h"
#include "LedStrip.h"

int led_pins[] = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};

Led *loop_led = new Led(50);
LedStrip *led_strip = new LedStrip(12, led_pins);

void setup() {
  loop_led->init();
}

void loop () {
  loop_led->changeState();
}