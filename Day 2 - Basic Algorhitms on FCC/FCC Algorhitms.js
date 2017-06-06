
// Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);



// Seek and Destroy --------------------------------------------------------------------------

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  function filteredArr(arr) {
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filteredArr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Where do I belong --------------------------------------------------------------------------


function getIndexToIns(arr, num) {
  // move arguments into array and sort them by value.
var args = Array.prototype.slice.call(arguments).toString().split(',').map(Number).sort(sortNums);
  
  return args.indexOf(num);  
   
   
}
// function for .sort()
function sortNums(a, b) {
  return a - b;
}

// // .sort(sortNums)
getIndexToIns([3, 10, 5], 3);



// Caesars Cipher --------------------------------------------------------------------------------

function rot13(str) { // LBH QVQ VG!
  
  var arr = [];
  
  for(var i = 0; i < str.length; i++) {
    
    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      arr.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return arr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


// It's -13 for (78)N..Z, and +13 for A..M(77), and no change for anything else.

// Reverse a String ------------------------------------------------------------------------------


function reverseString(str) {
  
  var reverse = str.split("").reverse().join("");
  
  return reverse;
}

reverseString("hello");

// Factorialize a Number  ------------------------------------------------------------------------


function factorialize(num) {
  
  var n = num;
  var result = 1;
  
  for(var i = 0; i < num; i++){
    result *= n;
    n--;
  }
  return result;
}

factorialize(5);


// Check for Palindromes --------------------------------------------------------------------------



function palindrome(str) {
  // Good luck!
  var palindrome = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  var reversed = palindrome.split("").reverse().join("");
  
  return palindrome === reversed;
 
}



palindrome("race car");


// Find the Longest Word in a String ---------------------------------------------------------------


function findLongestWord(str) {
  var words = str.split(" ");
  var longest = Number();
  for(var i = 0; i < words.length; i++){
    
    if( longest < words[i].length){
      longest = words[i].length;
    }
    
  }
 return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Title Case a Sentence ----------------------------------------------------------------------------


function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  for(var i = 0; i < words.length; i++) {
     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);  
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");


// Return Largest Numbers in Arrays ------------------------------------------------------------------

function largestOfFour(arr) {
  var result= [];
  function compareNumbers(a, b) {
  return b - a;
    }
  for(var i = 0; i < arr.length; i++) {
    arr[i].sort(compareNumbers);
    result.push(arr[i][0]);
    console.log(result);
  }
  return result;
}

  largestOfFour([[-4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending --------------------------------------------------------------------------------


function confirmEnding(str, target) {

  
  return str.substr(-target.length) === target;
}

confirmEnding("Open sesame", "same");


// Repeat a string repeat a string -------------------------------------------------------------------


function repeatStringNumTimes(str, num) {
  // repeat after me
  
  if((num <= 0))
    return "";
  
  return str + repeatStringNumTimes(str, num-1); // recursion motherfucker
   
 
}

repeatStringNumTimes("abc", 3);


// Truncate a string  --------------------------------------------------------------------------------


function truncateString(str, num) {

  if(num <= 3){
 return str.slice(0,num) + "...";
 }
 if (num >= str.length){
 return str;
 }
 return str.slice(0,num-3) + "...";
  
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Mutations -----------------------------------------------------------------------------------------

function mutation(arr) {
  
  var arrOne = arr[0].toLowerCase();
  var arrTwo = arr[1].toLowerCase();
  
  for(var i = 0; i < arrTwo.length; i++) {
    if(arrOne.indexOf(arrTwo[i]) < 0 ) {
      return false;
    }
  }
  return true;
}


mutation(["hello", "hey"]);

// Chunky Monkey ---------------------------------------------------------------------------------------

function chunkArrayInGroups(arr, size) {
  var result = [];
  
  while (arr.length > size) {
        result.push(arr.splice(0, size));
    }
    if (arr.length)
        result.push(arr);
  
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick  --------------------------------------------------------------------------------------


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  var result = arr.splice(0, howMany);
  
  return arr;
}

slasher([1, 2, 3], 2);




