Conversion                      Output Specification

    %a                  Floating-point number, hexadecimal digits and p-notation (C99/C11).
    %A                  Floating-point number, hexadecimal digits and P-notation (C99/C11).
    %c                  Single character.
    %d                  Signed decimal integer.
    %e                  Floating-point number, e-notation.
    %E                  Floating-point number, e-notation.
    %f                  Floating-point number, decimal notation.
    %g                  Use %f or %e , depending on the value. The %e style is used if the exponent is
                        less than −4 or greater than or equal to the precision.
    %G                  Use %f or %E , depending on the value. The %E style is used if the exponent is
                        less than −4 or greater than or equal to the precision.
    %i                  Signed decimal integer (same as %d ).
    %o                  Unsigned octal integer.
    %p                  A pointer.
    %s                  Character string.
    %u                  Unsigned decimal integer.
    %x                  Unsigned hexadecimal integer, using hex digits 0f .
    %X                  Unsigned hexadecimal integer, using hex digits 0F .
    %%                  Prints a percent sign.
    
#### The printf() Modifiers

Modifier                            Meaning

    flag        The five flags ( - , + , space, # , and 0 ) are described in Table 4.5 . Zero or more
                flags may be present.
                Example: "%-10d".
                
    digit(s)    The minimum field width. A wider field will be used if the printed number or string
                won’t fit in the field.
                Example: "%4d".
                
    .digit(s)   Precision. For %e , %E , and %f conversions, the number of digits to be printed to
                the right of the decimal. For %g and %G conversions, the maximum number of
                significant digits. For %s conversions, the maximum number of characters to be
                printed. For integer conversions, the minimum number of digits to appear; leading
                zeros are used if necessary to meet this minimum. Using only . implies a follow-
                ing zero, so %.f is the same as %.0f .
                Example: "%5.2f" prints a float in a field five characters wide with two digits
                after the decimal point.
                
    h           Used with an integer conversion specifier to indicate a short int or unsigned
                short int value.
                Examples: "%hu" , "%hx" , and "%6.4hd".
                
    hh          Used with an integer conversion specifier to indicate a signed char or
                unsigned char value.
                Examples: "%hhu" , "%hhx" , and "%6.4hhd".
                
    j           Used with an integer conversion specifier to indicate an intmax_t or uintmax_t
                value; these are types defined in stdint.h .
                Examples: "%jd" and "%8jX".
                
    l           Used with an integer conversion specifier to indicate a long int or unsigned
                long int .
                Examples: "%ld" and "%8lu".
                
    ll          Used with an integer conversion specifier to indicate a long long int or
                unsigned long long int . (C99).
                Examples: "%lld" and "%8llu".
                
    L           Used with a floating-point conversion specifier to indicate a long double value.
                Examples: "%Lf" and "%10.4Le".
                
    t           Used with an integer conversion specifier to indicate a ptrdiff_t value. This is
                the type corresponding to the difference between two pointers. (C99).
                Examples: "%td" and "%12ti".
                
    z           Used with an integer conversion specifier to indicate a size_t value. This is the
                type returned by sizeof . (C99).
                Examples: "%zd" and "%12zx".