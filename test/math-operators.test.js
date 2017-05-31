const Math = require('../src/math-operators');

describe('Test math operators', function() {
    it('should be equal to 4 when 1 + 3', function() {
        expect(Math.sum(1, 3)).toBe(4);
    });

    it('should be equal to -2 when 1 - 3', function() {
        expect(Math.sub(1, 3)).toBe(-2);
    });

    it('should be equal to 3 when 1 * 3', function() {
        expect(Math.multiply(1, 3)).toBe(3);
    });

    it('should be equal to 0.33 when 1 / 3', function() {
        expect(Math.div(1, 3)).toBeCloseTo(0.33);
    });

    it('should be greater than 3 when 1 + 3', function() {
        expect(Math.sum(1, 3)).toBeGreaterThan(3);
    });

    it('should be equal to 3 when 1 + 2', function() {
        expect(Math.sum(1, 2)).toEqual(3);
    });

    it('should be less than 3 when 1 + 1', function() {
        expect(Math.sum(1, 1)).toBeLessThan(3);
    });
});
