// compareEquality(10, "10") should return the string Not Equal
// compareEquality("20", 20) should return the string Not Equal
// You should use the === operator

// Setup
function compareEquality(val, val1) {
    if (val===val1) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
compareEquality(20, 20);

console.log(compareEquality(20, 20));