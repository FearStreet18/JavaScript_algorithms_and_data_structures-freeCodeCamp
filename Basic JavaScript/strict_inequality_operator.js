// testStrictNotEqual(17) should return the string Equal
//  testStrictNotEqual("17") should return the string Not Equal
//  testStrictNotEqual("bob") should return the string Not Equal
//  You should use the !== operator

// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);