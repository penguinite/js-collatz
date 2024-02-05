# collatz

A simple collatz conjecture calculator for Javascript.

## How to use

Install with npm: `npm i collatzgen`

Import:

```javascript
// Import every function
import { collatz, next } from "./src/index.js"

// Calculate collatz conjecture of 13
// This returns an array containing every number in order.
console.log(collatz(13).toString()) // Returns 40,20,10,5,16,8,4,2,1

// Get the next collatz calculation in line.
console.log(next(5)) // Returns 16
```
