#include <stdio.h>
// プロトタイプ宣言
int functionA();
int functionB(int num);
int main(){
    printf("%d\n",functionA());// 関数の呼び出し
}
// 実装(本体)
int functionA(){return functionB(1+1);}
int functionB(int num){return num * num;}
