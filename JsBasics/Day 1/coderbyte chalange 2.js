// String Challenge
// Have the function StringChallenge(num) take the num parameter being passed and return the number of hours and minutes 
// the parameter converts to (ie. if num = 63 then the output should be 1:3).
//  Separate the number of hours and minutes with a colon.

// Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

// Your ChallengeToken: dhkvgm6xo7af


function StringChallenge(num) { 
    let rimender=num%60 ;
    let St="" ;
    let hours= Math.floor(num/60);
    // code goes here  
    return St.concat(hours,":",rimender,":dhkvgm6xo7af"); 
  
  }
     
  // keep this function call here 
  //console.log(StringChallenge(readline()));
  let st=StringChallenge(readline()).split(":");
  let reverse=[];
  st.forEach(str=>{
    reverse.push(str.split("").reverse().join(""));
  })
  //console.log(st)
  reverse=reverse[1]+":"+reverse[0]+":"+reverse[2];
  console.log(reverse);
  