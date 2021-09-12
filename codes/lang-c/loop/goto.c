for(int b=0;b<100;++b){
    for(int c=0;c<100;++c){
        if(b==2 && c==2)
            goto end;
        printf("%d %d\n",b,c);
    }
}
end:
    printf("end\n");
