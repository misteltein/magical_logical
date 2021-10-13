#include <stdio.h>
#include <stdlib.h>

int main(){
    // ファイルを開く
    FILE* fp = fopen("sample.ssv", "r");
    if( fp == NULL ){
        printf("failed to open the file\n");
        return EXIT_FAILURE;
    }
    // 内容を1行ずつ読み込む
    int num;
    while(fscanf(fp, "%d\n", &num) != EOF){
        printf("%d\n", num);
    }
    // ファイルを閉じる
    fclose(fp);
    return EXIT_SUCCESS;
}
