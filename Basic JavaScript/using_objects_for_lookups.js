

//  phoneticLookup("alpha") should equal the string Adams
//  phoneticLookup("bravo") should equal the string Boston
//  phoneticLookup("charlie") should equal the string Chicago
//  phoneticLookup("delta") should equal the string Denver
//  phoneticLookup("echo") should equal the string Easy
//  phoneticLookup("foxtrot") should equal the string Frank
//  phoneticLookup("") should equal undefined
//  You should not modify the return statement
//  You should not use case, switch, or if statements

// Setup

function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");