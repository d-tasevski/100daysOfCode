#include <stdio.h>
#include <string.h>

int main(void){
    
    char first[40];
    char last[40];
    int width = 8;
    
    printf("Please tell me you first and last name. \n");
    scanf("%s %s", first, last);

    printf("%*s %*s \n",width, first, width, last);
    printf("%*lu %*lu\n", width, strlen(first), width, strlen(last));
    
    printf("%*s %*s \n",-width, first, -width, last);
    printf("%*lu %*lu\n", -width, strlen(first), -width, strlen(last));
}

// Done