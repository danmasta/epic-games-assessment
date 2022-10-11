class MatrixError extends Error {
    constructor (msg) {
        super(msg);
        Error.captureStackTrace(this, MatrixError);
        this.name = 'MatrixError';
        this.code = 'MATRIXERROR';
    }
}

// Simple check to verify matrix type is useable
function verifyMatrixType (matrix) {

    if (!Array.isArray(matrix)) {
        throw new MatrixError(`Matrix is not correct Array type: ${matrix}`);
    }

    matrix.forEach((row, index) => {
        if (!Array.isArray(row)) {
            throw new MatrixError(`Matrix row is not correct Array type: ${row}`);
        }
    });

}

// Process a matrix in a clockwise swirl type fashion
// Accepts a matrix of values
// Returns a string of all items merged together and separated by commas
function clockwiseMatrixToString (matrix) {

    verifyMatrixType(matrix);

    let res = [];
    let row = 0;
    let col = 0;
    let direction = 0; // 0 = down; 1 = up;

    function iterate () {

        // handle top row
        if (row === 0 && col === 0) {

            res = res.concat(matrix.shift());

            if (matrix.length) {
                col = matrix[row].length - 1;
                direction = 0;
            }

        // handle bottom row
        } else if (row === matrix.length - 1 && col === matrix[row].length - 1) {

            matrix[row].reverse();
            res = res.concat(matrix.pop());

            row--;
            col = 0;
            direction = 1;

        // handle column edges
        } else {
            if (direction === 0) {
                res.push(matrix[row].pop());
                row++;
            } else {
                res.push(matrix[row].shift());
                row--;
            }
        }

    }

    while (matrix.length) {
        iterate();
    }

    return res.join(', ');

}

module.exports = exports = clockwiseMatrixToString;
exports.clockwiseMatrixToString = clockwiseMatrixToString;
exports.MatrixError = MatrixError;
