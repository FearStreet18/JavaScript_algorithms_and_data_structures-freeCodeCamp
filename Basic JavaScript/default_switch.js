// switchOfStuff("a") should return the string apple
//  switchOfStuff("b") should return the string bird
//  switchOfStuff("c") should return the string cat
//  switchOfStuff("d") should return the string stuff
//  switchOfStuff(4) should return the string stuff
//  You should not use any if or else statements
//  You should use a default statement
//  You should have at least 3 break statements

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case "a": answer = "apple"; break;
        case "b": answer = "bird"; break;
        case "c": answer = "cat"; break;
        default: answer = "stuff"; break;
    }
  
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);