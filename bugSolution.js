function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else if (a + 1 > b) { // Added base case to stop recursion when a+1 exceeds b
    return false; // Or handle the case appropriately
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); // Works correctly now