#include <stdio.h>

void smile(int n);

int main(void){
    smile(3);
    smile(2);
    smile(1);
}

void smile(int n){
    
    for(int i = 0; i < n; i++){
        printf("Smile!");
    }
    printf("\n");
}
// Done