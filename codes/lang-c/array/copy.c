#define SIZE 5
int array1[SIZE] = {1, 2, 3, 4, 5};
int array2[SIZE] = {1, 1, 1, 1, 1};
for(int idx = 0; idx < SIZE; ++idx){
    array1[idx] = array2[idx];
}
