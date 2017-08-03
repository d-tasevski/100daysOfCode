/* platinum.c -- your weight in platinum */
#include <stdio.h>
int main(void)
{
    float weight; /* user weight */
    float value; /* platinum equivalent */
    printf("Are you worth your weight in platinum?\n");
    printf("Let's check it out.\n");
    printf("Please enter your weight in pounds: ");
    /* get input from the user */
    // The %f instructs scanf()
    // to read a floating-point number from the keyboard, and the &weight tells scanf() to
    // assign the input value to the variable named weight . The scanf() function uses the &
    // notation to indicate where it can find the weight variable. 
    scanf("%f", &weight);
    /* assume platinum is $1700 per ounce */
    /* 14.5833 converts pounds avd. to ounces troy */
    value = 1700.0 * weight * 14.5833;
    printf("Your weight in platinum is worth $%.2f.\n", value);
    printf("You are easily worth that! If platinum prices drop,\n");
    printf("eat more to maintain your value.\n");
    return 0;
}