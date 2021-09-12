#include <stdio.h>
#include <stdlib.h>

int main(){
    int array[5] = {5, 3, 4, 2, 1};
    for(int i=0;i<5-1;++i){
        printf("(%d, %d)",array[i],array[i+1]);
    }
    printf("\n");
    return EXIT_SUCCESS;
}
