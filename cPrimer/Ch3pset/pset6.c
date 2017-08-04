#include <stdio.h>

int main(void){
    
    float cmInInch = 2.54;
    float inches;
    
    printf("How centimeters tall are you?\n");
    scanf("%f", &inches);
    printf("So you are %f inches tall\n", inches / cmInInch);
    
    return 0;
}

// Done