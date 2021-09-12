#include <stdio.h>
#include <stdlib.h>

#include "MT.h"

typedef struct {
   double x;
   double y;
} Point;

double randomBetween(double begin, double end);

int main() {
   init_genrand(238236235);

   Point p = {randomBetween(-0.5 * L_BOX, +0.5 * L_BOX),
              randomBetween(-0.5 * L_BOX, +0.5 * L_BOX)};

   return EXIT_SUCCESS;
}

double randomBetween(double begin, double end) {
   return (end - begin) * genrand_real1() + begin;
}
