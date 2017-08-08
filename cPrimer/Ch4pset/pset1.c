#include <stdio.h>

int main(void){
    
    char first[40], last[40];
    
    printf("Tell me your first name please.\n");
    scanf("%s", first);
    printf("And your last name?\n");
    scanf("%s", last); // we dont need address specifier (&) when storing data into arrays
    printf("Nice to meet you %s %s!\n", first, last);
    
    return 0;
}

// Done