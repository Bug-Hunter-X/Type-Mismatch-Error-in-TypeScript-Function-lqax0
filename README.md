# Type Mismatch Error in TypeScript Function

This code demonstrates a type mismatch error in TypeScript. The function `divide` expects two numbers as input, but the code attempts to pass a string as the second argument.  This results in a runtime error, highlighting the importance of type safety in TypeScript.

## How to Reproduce

1. Clone this repository.
2. Compile the code using a TypeScript compiler (`tsc bug.ts`).
3. Run the compiled JavaScript code.

The error will be thrown during runtime because the type checker does not catch the error and only validates the code at compile time. This error only appears when actually trying to run the code, resulting in an unexpected runtime failure. 

## Solution

The solution involves using type guards to ensure that the arguments passed to the `divide` function are of the correct type. See the `bugSolution.ts` file for a corrected implementation.