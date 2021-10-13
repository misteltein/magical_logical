#include <stdio.h>
#include <stdlib.h>

int main() {
   // ファイルを開く
   FILE* fp = fopen("sample.ssv", "r");
   if (fp == NULL) {
      printf("failed to open the file\n");
      return EXIT_FAILURE;
   }
   // ファイルを閉じる
   fclose(fp);
   return EXIT_SUCCESS;
}
