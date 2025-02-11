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

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = add(5, 3); // 8
console.log(result);
result = subtract(10, 4); // 6
console.log(result);
result = multiply(7, 2); // 14
console.log(result);
result = divide(9, 3); // 3
console.log(result);
let num1:number = 9; 
let num2:string = "hello";
if (isNumber(num1) && isNumber(parseFloat(num2))){
    result = divide(num1, parseFloat(num2) );
    console.log(result);
} else {
    console.log("Invalid input type");
}