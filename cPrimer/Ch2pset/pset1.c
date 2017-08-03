#include <stdio.h>

int main(void){
    
    char* firstName = "Darko";
    char* lastName = "Tasevski";
    
    printf("%s %s\n", firstName, lastName); 
    printf("%s\n%s\n", firstName, lastName);
    printf("%s ", firstName);
    printf("%s\n",lastName);
    
    return 0;
}

// Done