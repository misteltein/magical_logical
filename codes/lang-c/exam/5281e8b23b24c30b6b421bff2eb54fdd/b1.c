#include <stdio.h>
#include <stdlib.h>

int main() {
   int a = ALPHA;
   int b = BETA;
   int c = a > b ? a : b;
   for (a = b; a < c; a += 2) {
      printf("%d ", a);
   }
   return EXIT_SUCCESS;
}
