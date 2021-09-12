const int size = 5;
int array1[size] = {1, 2, 3, 4, 5};
int array2[size] = {1, 1, 1, 1, 1};
for(int idx = 0; idx < size; ++idx){
    array1[idx] = array2[idx];
}
