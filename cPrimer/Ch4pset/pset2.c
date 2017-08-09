#include <stdio.h>
#include <string.h>

int main(void){
    
    char first[40];
    
    printf("Tell me your first name please.\n");
    scanf("%s", first);
    int width = strlen(first) + 2;
    printf("\"%s\"\n", first);
    printf("\"%20s\"\n", first);
    printf("\"%-20s\"\n", first);
    printf("\"%*s\"\n",width, first);
    return 0;
}

// Done