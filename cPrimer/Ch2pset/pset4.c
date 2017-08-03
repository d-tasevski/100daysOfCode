#include <stdio.h>

void jolly(void);
void deny(void);

int main(void){
    int num = 3;
    
    for(int i = 0; i < num; i++){
        printf("For he's a");
        jolly();
        printf("good fellow!\n");
    }
    deny();
    
    return 0;
}

void jolly(void){
    printf(" jolly good ");
}

void deny(void){
    printf("Which nobody can deny!\n");
}
// Done