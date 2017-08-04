#include <stdio.h>

int main(void){
    
    float age;
    double seconds = 3.156e7;
    printf("How old are you?\n");
    scanf("%f", &age);
    printf("You are old %.4f seconds then\n", seconds * age);
    
    return 0;
}
// Done
// https://www.le.ac.uk/users/rjm1/cotter/page_30.htm