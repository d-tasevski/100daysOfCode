#include <stdio.h>

int main(void){
    
    int quart = 950;
    int numOfQuarts;
    long long waterMolecule = 3e10-23;
    double numOfMolecules;
    
    printf("How many quarts of water you have there?\n");
    scanf("%d", &numOfQuarts);
    numOfMolecules = (numOfQuarts * quart) * waterMolecule;
    printf("You have %f water molecules there!\n", numOfMolecules);
    
    return 0;
}

// Done