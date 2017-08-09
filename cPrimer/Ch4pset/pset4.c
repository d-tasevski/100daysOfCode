#include <stdio.h>

int main(void){
    
    char name[40];
    float height;
    
    printf("Tell me your name, please. ");
    scanf("%s", name);
    printf("Okay, %s and your height in cms? ", name);
    scanf("%f", &height);
    printf("%s you are %.1f height in meters!\n", name, height / 100);
    
    return 0;
}
// Done