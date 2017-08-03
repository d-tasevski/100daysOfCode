#include <stdio.h>

void br(void); // prints “Brazil, Russia” once
void ic(void); // prints “India, China” once

int main(void){
    br();
    printf(", ");
    ic();
    printf("\n");
    ic();
    printf(", \n");
    br();
    printf("\n");
}

void br(void){
    printf("Brazil, Russia");
}
void ic(void){
    printf("India, China");
}
// done