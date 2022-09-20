#include <stdio.h>
// プロトタイプ宣言
int functionA();
int functionB(int num);
int main(){
    int result = functionA(); // 関数の呼び出し
    printf("%d\n", result);
}
// 実装(本体)
int functionA(){return functionB(1+1);}
int functionB(int num){return num * num;}
