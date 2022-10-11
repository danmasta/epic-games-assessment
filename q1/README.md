# Clockwise Matrix

## About
We needed a way to process a matrix in a clockwise fashion and return the result as a single string separated by commas.

## Thoughts
Initially I thought to process the matrix via multiple steps in one imperative function. While this does work, it is quite brittle code. Meaning once we expand the example and try to parse matrices of different sizes it would break. So I then thought to use recursion, iterating over the rows and passing some state back through the same function until complete. This would also work, but the passing of lots of state as discrete parameters can be hard to debug and maintain. I then landed on using more of a state machine type pattern where we iteratively parse the matrix until the state has been fully resolved (when the matrix is empty in this particular case).

When implementing the function a couple of patterns became clear. We could always merge the top row of the matrix whole, and the bottom row whole in reverse. We then just needed to account for the direction of the column edges. This helped simplify the code and the current implementation uses functions like `pop` and `shift` to modify the matrix in place until empty. Basically on each iteration the matrix size shrinks until all elements have been processed.

### Assumptions
In the given example we have a 4x3 matrix. Which means the assumed clockwise function would loop through the matrix exactly once. I made a few extra assumptions:
1. That we may want to support matrices of any size
2. That the clockwise pattern should repeat until the full matrix has been completed, in a type of swirl pattern for large matrices
3. This is not hot path super critical code that needs to be heavily optimized

## Usage
*Just an example, it's not really published*

### Setup
Install dependencies via npm
```bash
npm install
```

Add clockwise matrix as a dependency for your app and install via npm
```bash
npm install @danmasta/clockwise-matrix --save
```

Require the package in your app and use
```javascript
const clockwiseMatrixToString = require('@danmasta/clockwise-matrix');

console.log('String:', clockwiseMatrixToString([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

// String: 1, 2, 3, 6, 9, 8, 7, 4, 5
```

## Testing
Tests are currently run using `mocha` and `chai`. To execute tests just run `npm run test`

## Contact
If you have any questions feel free to get in touch
