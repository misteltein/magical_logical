#include <stdio.h>
#include <stdlib.h>

int f(int v) {
   return 2 * v;
}

int main() {
   int s = 0;
   int a = 0;
   while (a < ALPHA) {
      s += f(a);
      a += 1;
   }
   printf("%03d", s);
   return EXIT_SUCCESS;
}
