function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

let result = add(5, 3); // 8
console.log(result);
result = subtract(10, 4); // 6
console.log(result);
result = multiply(7, 2); // 14
console.log(result);
result = divide(9, 3); // 3
console.log(result);
//Uncommon Error: The following code will throw an error because of type mismatch
// result = divide(9, "hello");