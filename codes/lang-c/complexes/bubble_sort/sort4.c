#include <stdio.h>
#include <stdlib.h>

int main(){
    int array[5] = {5, 3, 4, 2, 1};
    for(int i=0;i<5;++i){
        printf("%d",array[i]);
    }
    printf("\n");
    for(int i=0;i<5-1;++i){
        if(array[i] > array[i+1]){
            const int tmp = array[i];
            array[i] = array[i+1];
            array[i+1] = tmp;
        }
    }
    for(int i=0;i<5;++i){
        printf("%d ",array[i]);
    }
    printf("\n");
    return EXIT_SUCCESS;
}
