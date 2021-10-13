#include <stdio.h>
int main(){
    FILE* fp = fopen("hoo.ssv", "r");
    if( fp == NULL ){
        printf("failed to open the file");
    }
    int num;
    while(fscanf(fp, "%d\n", &num) != EOF){
        printf("%d", num);
    }
    fclose(fp);
}
