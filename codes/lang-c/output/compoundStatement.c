int main(){
  { // 複合文 1 つめ
    int i = 0;
    printf("%d", i);
  }
  { // 複合文 2 つめ
     int i = 45; // 先程の i とは別物
     printf("%d", i);
  }
  printf("%d", i); // コンパイルエラーになる文
}
