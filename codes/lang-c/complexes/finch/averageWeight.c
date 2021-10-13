double averageWeight(Finch* data) {
   double sum = 0.0;
   for (int i = 0; i < MAX_DATA_SIZE; ++i) {
      sum += data[i].weight;
   }
   return sum / MAX_DATA_SIZE;
}
