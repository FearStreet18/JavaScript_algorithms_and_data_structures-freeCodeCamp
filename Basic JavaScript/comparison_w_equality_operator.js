// testEqual(10) should return the string Not Equal
//  testEqual(12) should return the string Equal
//  testEqual("12") should return the string Equal
//  You should use the == operator

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  console.log(testEqual("12")); 
