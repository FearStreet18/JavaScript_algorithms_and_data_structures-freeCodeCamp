// abTest(2, 2) should return a number
//  abTest(2, 2) should return 8
//  abTest(-2, 2) should return undefined
//  abTest(2, -2) should return undefined
//  abTest(2, 8) should return 18
//  abTest(3, 3) should return 12
//  abTest(0, 0) should return 0

// Setup
function abTest(a, b) {
    // Only change code below this line
    let error; 
    if(a<0 || b<0) {
        return error;
    }
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(-2,2));