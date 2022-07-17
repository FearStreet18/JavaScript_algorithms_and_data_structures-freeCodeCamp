//  You should use the && operator once
//  You should only have one if statement
//  testLogicalAnd(0) should return the string No
//  testLogicalAnd(24) should return the string No
//  testLogicalAnd(25) should return the string Yes
//  testLogicalAnd(30) should return the string Yes
//  testLogicalAnd(50) should return the string Yes
//  testLogicalAnd(51) should return the string No
//  testLogicalAnd(75) should return the string No
//  testLogicalAnd(80) should return the string No

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val > 24 && val <= 50) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);