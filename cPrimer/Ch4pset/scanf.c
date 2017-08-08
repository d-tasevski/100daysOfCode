// input.c -- when to use &
#include <stdio.h>

int main(void)
{
    int age; // variable
    float assets; // variable
    char pet[30]; // string
    
    printf("Enter your age, assets, and favorite pet.\n");
    scanf("%d %f", &age, &assets); // use the & here
    scanf("%s", pet); // no & for char array
    printf("%d $%.2f %s\n", age, assets, pet);
    
    return 0;
}
// Conversion Specifier                Meaning
// %c                  Interpret input as a character.
// %d                  Interpret input as a signed decimal integer.
// %e , %f , %g , %a   Interpret input as a floating-point number ( %a is C99).
// %E , %F , %G , %A   Interpret input as a floating-point number ( %A is C99).
// %i                  Interpret input as a signed decimal integer.
// %o                  Interpret input as a signed octal integer.
// %p                  Interpret input as a pointer (an address).
// %s                  Interpret input as a string. Input begins with the first non-whitespace
//                     character and includes everything up to the next whitespace character.
// %u                  Interpret input as an unsigned decimal integer.
// %x , %X             Interpret input as a signed hexadecimal integer.