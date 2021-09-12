#include <stdio.h>
#include <stdlib.h>

#include "MT.h"

int main() {
   init_genrand(238236235);
   printf("%f\n", genrand_real1());
   return EXIT_SUCCESS;
}
