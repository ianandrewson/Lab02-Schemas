import Validator from '../lib/validator.js';

describe('Validator class tests', () => {
    it('should take an object and return a fields value', () => {
        expect();
    });
    it('should take an object and throw an error if field does not exist', () => {
        expect();
    });
    it('should handle all permutations of requirement, field presence, and type', () => {
        expect(validate()).toThrowError();
        expect(validate()).toThrowError();
        expect(validate()).toBeTruthy();
        expect(validate()).toBeTruthy();
        expect(validate()).toThrowError();
        expect(validate()).toBeTruthy();
    });
});


// required and field missing
// required and field there but wrong type
// required and field there and right type
// not required and field missing
// not required and field there but wrong type
// not required and field there and right type
