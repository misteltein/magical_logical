void bubbleSort(int array[], int size, bool ascendingOrder) {
   for (int j = 0; j < size - 1; ++j) {
      bool swapped = false;
      for (int i = 0; i < size - j - 1; ++i) {
         if (ascendingOrder ? array[i] > array[i + 1]
                            : array[i] < array[i + 1]) {
            const int tmp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            swapped = true;
         }
      }
      if (!swapped) {
         break;
      }
   }
   return;
}
