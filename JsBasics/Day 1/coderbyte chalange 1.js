// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

// Examples
// Input: "never odd or even"
// Output: trueInput: "eye"
// Output: true



function StringChallenge(str) { 
  let stroriginal=str.toLowerCase().replace(/ /g,'');
  let reverse=stroriginal.split('').reverse().join('');
  // code goes here  
  // console.log(stroriginal);
  // console.log(reverse);
  return   stroriginal==reverse;
; 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));


