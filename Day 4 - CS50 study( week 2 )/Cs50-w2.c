
// cs50 week 2 

#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[]) // arguments
{
    if (argc == 2) // if there is 2 arguments
    {
        printf("hello, %s\n", argv[1]);
    }
    else
    {
        printf("hello, world\n");
    }
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>
 // The name of the variable argc stands for "argument count"; argc contains the number of arguments passed to the program. The name of the variable argv stands for "argument vector". 
 // A vector is a one-dimensional array, and argv is a one-dimensional array of strings. Each string is one of the arguments that was passed to the program.
// there will always be at least one argument to a program, and argc will always be at least 1.

int main(int argc, string argv[]) 
{
    for (int i = 0; i < argc; i++)
    {
        printf("%s\n", argv[i]);
    }
}

// They can also be omitted entirely, yielding int main( void ), if you do not intend to process command line arguments.
// So , the first parameter is the number of arguments provided(the first one is just a name of the program ) and the second parameter is a list of strings representing those arguments.

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(int argc, string argv[])
{
    for (int i = 0; i < argc; i++)
    {
        for (int j = 0, n = strlen(argv[i]); j < n; j++)
        {
            printf("%c\n", argv[i][j]);
        }
        printf("\n");
    }
}

////////////////////////////////////////////////////////

#include <stdio.h>

int main(void)
{   // printing alphabet here 
    for (int i = 65; i <= 90; i++)
    {
        printf("%c is %i\n", (char) i, i);
    }
}


////////////////////////////////////////////////////////

#include <stdio.h>

int main(void)
{
    for (char c = 'A'; c <= 'Z'; c++)
    {
        printf("%c is %i\n", c, (int) c);
    }
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    if (s != NULL)
    {
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            if (s[i] >= 'a' && s[i] <= 'z')
            {
                printf("%c", s[i] - ('a' - 'A'));
            }
            else
            {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    if (s != NULL)
    {
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            if (islower(s[i]))
            {
                printf("%c", toupper(s[i]));
            }
            else
            {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    if (s != NULL)
    {
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            printf("%c", toupper(s[i]));
        }
        printf("\n");
    }
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("missing command-line argument\n");
        return 1;
    }
    printf("hello, %s\n", argv[1]);
    return 0;
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = get_string();
    int n = 0;
    while (s[n] != '\0') // every string in C finishes with \0 , that marks down end of that string
    {
        n++;
    }
    printf("%i\n", n);
}

////////////////////////////////////////////////////////

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string();
    if (s != NULL)
    {
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            printf("%c\n", s[i]);
        }
    }
}
