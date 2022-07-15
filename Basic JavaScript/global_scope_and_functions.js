// myGlobal should be defined
//  myGlobal should have a value of 10
//  myGlobal should be declared using the let or const keywords
//  oopsGlobal should be a global variable and have a value of 5

// Declare the myGlobal variable below this line


function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5; 
  
  }

  let myGlobal = 10; 
  
  // Only change code above this line
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

