#include <stdio.h>

int main(void){
    int num;
    
    printf("Type an integer in range of 65-128, and I will tell you your character\n");
    scanf("%d", &num);
    printf("Your character is %c \n", num);
    
    return 0;
}