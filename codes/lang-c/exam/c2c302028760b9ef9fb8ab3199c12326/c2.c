#include <math.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct {
   char name;
   double x;
   double y;
   double r;
} DC;

typedef struct {
   char name;
   double x;
   double y;
} Recipient;

double distance(DC a, Recipient b) {
   return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
}

int main() {
   const DC dcs[] = {
       {'A', 3.0, 2.0, 2.0}, {'B', 2.0, 4.0, 1.0}, {'C', 7.0, 3.0, 3.0}};
   const Recipient recipients[] = {
       {'a', 4.0, 1.0}, {'b', 4.0, 5.0}, {'c', 6.0, 2.0}, {'d', 4.5, 2.5}};
   // ここから解答

   // ここまで解答
   return EXIT_SUCCESS;
}
