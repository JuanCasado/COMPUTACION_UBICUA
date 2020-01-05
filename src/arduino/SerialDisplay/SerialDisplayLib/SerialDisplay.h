
#include "Arduino.h"
#include "Display.h"

class SerialDisplay {
public:
  SerialDisplay(int displays_len, int *pinsA, int *pinsB, int *pinsC, int *pinsD, int *pinsE);
  void init();
  void update();
private:
  void updateRead();
  Display **displays;
  int len;
  int dot_position;
  bool reading;
};