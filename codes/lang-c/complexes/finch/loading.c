#include <stdio.h>
#include <stdlib.h>

#define MAX_DATA_SIZE 20
#define MAX_STRING_LENGTH 10

typedef struct {
   char name[MAX_STRING_LENGTH];
   double weight;
   double length;
} Finch;

int main(int argc, char* argv[]) {
   // ファイルを開く
   FILE* fp = fopen(argv[1], "r");
   if (fp == NULL) {
      printf("failed to open the file %s\n", argv[1]);
      return EXIT_FAILURE;
   }

   // 内容を 1 行ずつ読み込んで配列に保存する
   Finch array[MAX_DATA_SIZE];

   // ヘッダを無視するために，1 行分だけファイルポインタをずらす
   char dummy[MAX_STRING_LENGTH];
   if (fscanf(fp, "%s %s %s\n", dummy, dummy, dummy) == EOF) {
      // ファイルの内容がおかしいので警告
      printf("failed to read header\n");
      fclose(fp);
      return EXIT_FAILURE;
   }

   // 配列にデータを読み込む
   for (int i = 0; i < MAX_DATA_SIZE; ++i) {
      if (fscanf(fp, "%s %lf %lf\n", array[i].name, &array[i].weight,
                 &array[i].length) == EOF) {
         // 配列を埋めきる前にデータがなくなれば警告する
         printf("empty element exists\n");
         fclose(fp);
         return EXIT_FAILURE;
      }
   }

   // 読み残しがあれば警告する
   if (fscanf(fp, "%s\n", dummy) != EOF) {
      printf("number of elements in the array is insufficient\n");
      fclose(fp);
      return EXIT_FAILURE;
   }

   // 保存した配列の内容を表示
   for (int i = 0; i < MAX_DATA_SIZE; ++i) {
      printf("%s %f %f\n", array[i].name, array[i].weight, array[i].length);
   }

   return EXIT_SUCCESS;
}
