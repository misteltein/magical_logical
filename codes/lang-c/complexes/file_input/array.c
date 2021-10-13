#include <stdio.h>
#include <stdlib.h>

#define MAX_DATA_SIZE 3

int main(int argc, char* argv[]) {
   // ファイルを開く
   FILE* fp = fopen(argv[1], "r");
   if (fp == NULL) {
      printf("failed to open the file\n");
      return EXIT_FAILURE;
   }

   // 内容を1行ずつ読み込んで配列に保存する
   int array[MAX_DATA_SIZE];
   // 配列にデータを読み込む
   for (int i = 0; i < MAX_DATA_SIZE; ++i) {
      if (fscanf(fp, "%d\n", &array[i]) == EOF) {
         // 配列を埋めきる前にデータがなくなれば警告する
         printf("empty element exists\n");
         fclose(fp);
         return EXIT_FAILURE;
      }
   }
   // 読み残しがあれば警告する
   int dummy;
   if (fscanf(fp, "%d\n", &dummy) != EOF) {
      printf("number of elements in the array is insufficient\n");
      fclose(fp);
      return EXIT_FAILURE;
   }

   // 保存した配列の内容を表示
   for (int i = 0; i < MAX_DATA_SIZE; ++i) {
      printf("%d\n", array[i]);
   }

   return EXIT_SUCCESS;
}
