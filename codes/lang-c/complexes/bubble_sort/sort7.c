#include <stdio.h>
#include <stdlib.h>

int main(){
    int array[5] = {5, 3, 4, 2, 1};
    const int size = 5;
    for(int j=0;j<size-1;++j){
      for(int i=0;i<size;++i){
        printf("%d ",array[i]);
      }
      printf("\n");
      for(int i=0;i<size-j-1;++i){
          if(array[i] > array[i+1]){
              const int tmp = array[i];
              array[i] = array[i+1];
              array[i+1] = tmp;
          }
      }
      for(int i=0;i<size;++i){
          printf("%d ",array[i]);
      }
      printf("\n\n");
    }
    return EXIT_SUCCESS;
}
