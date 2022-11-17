// String ChallengeHave the function StringChallenge(str) take the str string parameter being passed 
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
//  Assume numbers and punctuation symbols will not be included in the string.ExamplesInput: "coderbyte"
// Output: bcdeeortyInput: "hooplah"
// Output: ahhloop

function StringChallenge(str) { 
 
    return str.split("").sort().join(""); 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));