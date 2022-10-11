describe('process matrix clockwise', () => {

    it('should handle a 4x3 matrix', () => {
        let matrix = [
            [2, 3, 4, 8],
            [5, 7, 9, 12],
            [1, 0, 6, 10]
        ];
        expect(clockwiseMatrixToString(matrix)).to.equal('2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9');
    });

    it('should handle a 4x4 matrix', () => {
        let matrix = [
            [2, 3, 4, 8],
            [5, 7, 9, 12],
            [1, 0, 6, 10],
            [3, 6, 9, 1]
        ];
        expect(clockwiseMatrixToString(matrix)).to.equal('2, 3, 4, 8, 12, 10, 1, 9, 6, 3, 1, 5, 7, 9, 6, 0');
    });

    it('should handle a 3x3 matrix', () => {
        let matrix =  [
            [2, 3, 4],
            [5, 7, 9],
            [1, 0, 6]
        ];
        expect(clockwiseMatrixToString(matrix)).to.equal('2, 3, 4, 9, 6, 0, 1, 5, 7');
    });

    it('should handle a 3x4 matrix', () => {
        let matrix =  [
            [2, 3, 4],
            [5, 7, 9],
            [1, 0, 6],
            [9, 8, 7]
        ];
        expect(clockwiseMatrixToString(matrix)).to.equal('2, 3, 4, 9, 6, 7, 8, 9, 1, 5, 7, 0');
    });

    it('should handle undefined', () => {
        expect(() => {
            clockwiseMatrixToString(undefined);
        }).to.throw(MatrixError);
    });

    it('should handle an empty matrix', () => {
        expect(clockwiseMatrixToString([])).to.equal('');
    });

});
