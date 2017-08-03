#include <stdio.h>

int main(void){
    
    char ch;
    
    printf("Chars can be displayed as integers using their ASCII code. Here's an example: \n");
    scanf("%c", &ch);
    printf("%c can be represented as %d in decimal %#x in xehadecimal and %#o in octal\n",ch, ch, ch, ch);
    // Alert beep code
    printf("Hello!\007\n");
    return 0;
}
// https://www.lix.polytechnique.fr/~liberti/public/computing/prog/c/C/FUNCTIONS/format.html