#include <stdio.h>

int main(void){
    
    float teaspoon = 1;
    float tablespoon = teaspoon * 3;
    float ounce = tablespoon * 2;
    float cup = ounce * 8;
    float pint = cup * 2;
    float amount;
    printf("Good evening officer.\n");
    printf("Good evening...ID's please! And how many cups of beer you have there?!\n");
    scanf("%f", &amount);
    printf("Hmmmm, let me think.\n");
    printf("You have %.2f pints,\n", pint / amount);
    printf("You have %.2f cups, sure,\n", amount);
    printf("You have %.2f ounces,\n", amount * ounce);
    printf("You have %.2f tablespoons,\n", amount * tablespoon);
    printf("And %.2f teaspoons! Enjoy!\n", amount * teaspoon);

    return 0;
}