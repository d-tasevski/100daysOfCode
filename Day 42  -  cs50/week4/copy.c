#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void) {
    // prompt user with the string s
    printf("s: ");
    char *s = get_string();
    // error handling
    if( s == NULL){
        return 1;
    }
    // malloc - memory allocate
    // this line can also be written as: char *t = malloc(7) // 7 bytes allocated
    // also ( + 1) is giving one more byte so that we can have \0 at the end of the copied string
    char *t = malloc((strlen(s) + 1)* sizeof(char)); // size od char is usually 1
    // its important to know that malloc is just giving us a memory to use,
    // it doesnt gve us \0 character, so we must explicitly ask for space for it( + 1)
    if(t == NULL){
        return 1;
    }
    
    for(int i = 0, n = strlen(s); i <= n; i++){
        t[i] = s[i];
    }
    
    if(strlen(t) > 0){
        t[0] = toupper(t[0]);
    }
    
    printf("s: %s\n", s);
    printf("t: %s\n", t);
    
    free(t);
    
    return 0;
}