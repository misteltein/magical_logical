#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void bubbleSort(int array[], int size);
void preview(int array[], int size);

int main(){
    int sampleA[5] = {5, 3, 4, 2, 1};
    int sampleB[6] = {12,22,-10,3,-40,6};
    bubbleSort(sampleA, 5); preview(sampleA, 5);
    bubbleSort(sampleB, 6); preview(sampleB, 6);

    return EXIT_SUCCESS;
}

void bubbleSort(int array[], int size){
   for(int j=0;j<size-1;++j){
     bool swapped = false;
     for(int i=0;i<size-j-1;++i){
         if(array[i] > array[i+1]){
             const int tmp = array[i];
             array[i] = array[i+1];
             array[i+1] = tmp;
             swapped = true;
         }
     }
     if(!swapped){
       break;
     }
   }
   return ;
}

void preview(int array[], int size){
    for(int i=0;i<size;++i){
        printf("%d ",array[i]);
    }
    printf("\n");
}
