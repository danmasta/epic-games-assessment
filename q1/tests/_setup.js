const chai = require('chai');
const clockwiseMatrixToString = require('../index');

beforeEach(() => {
    global.clockwiseMatrixToString = clockwiseMatrixToString;
    global.MatrixError = clockwiseMatrixToString.MatrixError;
    global.assert = chai.assert;
    global.expect = chai.expect;
    global.should = chai.should();
});
