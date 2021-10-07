#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#include "MT.h"

typedef struct {
   double x;
   double y;
} Point;

typedef struct {
   Point center;
   double radius;
} Circle;

double randomBetween(double begin, double end);
bool isInside(Point p, Circle c);

int main() {
   init_genrand(238236235);
   const double R = 1.0;
   const double L_BOX = 2.1;

   Circle c = {{0.0, 0.0}, R};

   int numSample = 0;
   int count = 0;

   while (numSample < 1e+8) {
      const Point p = {randomBetween(-0.5 * L_BOX, +0.5 * L_BOX),
                       randomBetween(-0.5 * L_BOX, +0.5 * L_BOX)};
      if (isInside(p, c)) {
         count += 1;
      }
      numSample += 1;
      printf("%f\r", pow(L_BOX, 2) * ((double)count / numSample));
   }

   return EXIT_SUCCESS;
}

double randomBetween(double begin, double end) {
   return (end - begin) * genrand_real1() + begin;
}

bool isInside(Point p, Circle c) {
   double distanceToCenter =
       sqrt(pow(p.x - c.center.x, 2) + pow(p.y - c.center.y, 2));
   return distanceToCenter <= c.radius;
}
