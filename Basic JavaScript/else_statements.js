//  You should only have one if statement in the editor
//  You should use an else statement
//  testElse(4) should return the string 5 or Smaller
//  testElse(5) should return the string 5 or Smaller
//  testElse(6) should return the string Bigger than 5
//  testElse(10) should return the string Bigger than 5
//  You should not change the code above or below the specified comments.

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);