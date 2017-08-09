#include <stdio.h>

int main(void){
 
    float mbs, mb;
    
    printf("Whats you download speed? And how large that file is?\n");
    scanf("%f %f", &mbs, &mb);
    printf("So %.1f mb\\s and %.1f mb, right?\n", mbs, mb);
    
    return 0;
    
}