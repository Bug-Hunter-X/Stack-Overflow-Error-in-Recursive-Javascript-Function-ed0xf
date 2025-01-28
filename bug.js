function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); //This will cause a stack overflow error if b is significantly larger than a.