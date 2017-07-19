
### 1. What’s stdint.h?

    stdint.h is a header file in the C standard library introduced in the C99 standard library section 7.18 to allow programmers to write more portable code
    by providing a set of typedefs that specify exact-width integer types, together with the defined minimum and maximum allowable values for each type, using macros[1] .
    This header is particularly useful for embedded programming which often involves considerable manipulation of hardware specific I/O registers requiring integer data of fixed widths,
    specific locations and exact alignments.

### 2. What’s the point of using uint8_t, uint32_t, int32_t, and uint16_t in a program?

    This are unsigned integers type with width of exactly 8, 16, 32 and 64 bits respectively 
    (provided only if the implementation directly supports the type)
    (unsigned - cant be negative)

### 3. How many bytes is a BYTE, a DWORD, a LONG, and a WORD, respectively?
    
    BYTE is 8 bits long > 1 byte.
    DWORD is 32 bits long > 4 bytes.
    LONG is 32 bits long > 4 bytes.
    WORD is 16 bits long > 2 bytes.
    (bmp.h)

### 4. What (in ASCII, decimal, or hexadecimal) must the first two bytes of any BMP file be? Leading bytes used to identify file formats (with high probability) are generally called "magic numbers."
    
    The first 2 bytes of the BMP file format are the character "B" then the character "M" in ASCII encoding.
    All of the integer values are stored in little-endian format (i.e. least-significant byte first).
    
    The header field used to identify the BMP and DIB file is 0x42 0x4D in hexadecimal, same as BM in ASCII. The following entries are possible:
        * BM – Windows 3.1x, 95, NT, ... etc.
        * BA – OS/2 struct bitmap array
        * CI – OS/2 struct color icon
        * CP – OS/2 const color pointer
        * IC – OS/2 struct icon
        * PT – OS/2 pointer


### 5. What’s the difference between bfSize and biSize?
    
    biSize > The number of bytes required by the structure. (what is the structure exactly ?)
    The structure is the struct BITMAPINFOHEADER. That is a fixed value.
    biSizeImage > The size, in bytes, of the image. 
    bfSize > The size, in bytes, of the bitmap file. (what is the difference between image & bitmap file ?)
    biSizeImage is the whole image size, bfSize is the same, but you have to add the size of the 2 header files.

### 6. What does it mean if biHeight is negative?

    If biHeight is negative, the bitmap is a top-down DIB and its origin is the upper-left corner.
    If biHeight is negative, indicating a top-down DIB, biCompression must be either BI_RGB or BI_BITFIELDS. Top-down DIBs cannot be compressed.

### 7. What field in BITMAPINFOHEADER specifies the BMP’s color depth (i.e., bits per pixel)?

    biBitCount
    Specifies the number of bits per pixel (bpp). For uncompressed formats, this value is the average number of bits per pixel. 
    For compressed formats, this value is the implied bit depth of the uncompressed image, after the image has been decoded.

### 8. Why might fopen return NULL in lines 24 and 32 of copy.c?

    If it can't find the file.

### 9. Why is the third argument to fread always 1 in our code?

    Because it specifies how many elements you want to read, and we're always
    reading a struct so we only need 1 struct.

### 10. What value does line 65 of copy.c assign to padding if bi.biWidth is 3?
    
    If biWidth is 3:
    int padding =  (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4 = 3.
    This step ensures the number of bytes in every row is a multiple of 4.

### 11. What does fseek do?

    It moves to a specific location in a file.

### 12. What is SEEK_CUR?
    
    SEEK_CUR is the current position indicator in the file.
    An integer constant which, when used as the 'whence' argument to the
    fseek or fseeko function, specifies that the offset provided is relative to
    the current file position.