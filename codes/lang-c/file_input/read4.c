#include <stdio.h>
int main(){
    FILE* fp = fopen("hoo.ssv", "r");
    if( fp == NULL ){
        printf("failure");
    }
    int num;
    while(fscanf(fp, "%d\n", &num) != EOF){
        printf("%d", num);
    }
    fclose(fp);
}
