// 1. Run Listing 4.1 again, 
// but this time give your first and last name when it asks you for
// your first name. What happens? Why?

// talkback.c -- nosy, informative program
#include <stdio.h>
#include <string.h> // for strlen() prototype
#define DENSITY 62.4 // human density in lbs per cu ft
int main()
{
    float weight, volume;
    int size, letters;
    char name[40]; // name is an array of 40 chars
    
    printf("Hi! What's your first name?\n");
    scanf("%s", name);
    printf("%s, what's your weight in pounds?\n", name);
    scanf("%f", &weight);
    size = sizeof name;
    letters = strlen(name);
    volume = weight / DENSITY;
    printf("Well, %s, your volume is %2.2f cubic feet.\n",
    name, volume);
    printf("Also, your first name has %d letters,\n",
    letters);
    printf("and we have %d bytes to store it.\n", size);
    
    return 0;
}

// The program malfunctions. The first scanf() statement reads just your first name,
// leaving your last name untouched but still stored in the input “buffer.” (This buffer is
// just a temporary storage area used to store the input.) When the next scanf() statement
// comes along looking for your weight, it picks up where the last reading attempt ended,
// and it tries to read your last name as your weight. This frustrates scanf() . On the other
// hand, if you respond to the name request with something such as Lasha 144 , it uses 144
// as your weight, even though you typed it before your weight was requested.

