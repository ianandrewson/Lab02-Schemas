const { Validator } = require('../lib/validator.js');

const dog = {
    name: 'Spot',
    age: 5,
    weight: 20,
    goodBoi: 'true'
};

//required and field there and right type
const nameValidator = new Validator('name', {
    type: String,
    required: true
});

//required and field missing
const colorValidator = new Validator('color', {
    type: String,
    required: true
});

//required and field there and wrong type
const weightValidator = new Validator('weight', {
    type: String,
    required: true
});

//not required and field there and right type
const ageValidator = new Validator('age', {
    type: Number,
    required: false
});

//not required and field missing
const rabidValidator = new Validator('rabid', {
    type: String,
    required: false
});

//not required and field there and wrong type
const goodBoiValidator = new Validator('goodBoi', {
    type: Boolean,
    required: false
});

describe('Validator class tests', () => {
    it('should take an object and return a fields value', () => {
        expect(nameValidator.validate(dog)).toEqual('Spot');
        expect(ageValidator.validate(dog)).toEqual(5);
    });
    it('should take an object and throw an error if field does not exist', () => {
        expect(() => {colorValidator.validate(dog);}).toThrowError('missing required field');
    });
    it('should handle all permutations of requirement, field presence, and type', () => {
        // required and field missing
        expect(() => {colorValidator.validate(dog);}).toThrowError('missing required field');
        // required and field there but wrong type
        expect(weightValidator.validate(dog)).toEqual('20');
        // required and field there and right type
        expect(nameValidator.validate(dog)).toEqual('Spot');
        // not required and field missing
        expect(rabidValidator.validate(dog)).toEqual(undefined);
        // not required and field there but wrong type
        expect(() => {goodBoiValidator.validate(dog);}).toThrowError();
        // not required and field there and right type
        expect(ageValidator.validate(dog)).toBeTruthy();
    });
});


