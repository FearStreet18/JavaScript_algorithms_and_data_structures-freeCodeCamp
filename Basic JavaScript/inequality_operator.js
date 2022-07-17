//  testNotEqual(99) should return the string Equal
//  testNotEqual("99") should return the string Equal
//  testNotEqual(12) should return the string Not Equal
//  testNotEqual("12") should return the string Not Equal
//  testNotEqual("bob") should return the string Not Equal
//  You should use the != operator

// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  console.log(testNotEqual(99));