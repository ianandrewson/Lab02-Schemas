const { Validator } = require('../lib/validator.js');

const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
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
    type: Number,
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
})

describe('Validator class tests', () => {
    it('should take an object and return a fields value', () => {
        expect(nameValidator.validate(dog)).toEqual('Spot');
        expect(ageValidator.validate(dog)).toEqual('5');
        expect(weightValidator.validate(dog)).toEqual('20 lbs');
    });
    it('should take an object and throw an error if field does not exist', () => {
        expect(() => {colorValidator(dog);}).toThrowError();
    });
    it('should handle all permutations of requirement, field presence, and type', () => {
        expect(colorValidator.validate(dog)).toThrowError();
        expect(weightValidator.validate(dog)).toThrowError();
        expect(nameValidator.validate(dog)).toBeTruthy();
        expect(rabidValidator.validate(dog)).toBeTruthy();
        expect(goodBoiValidator.validate(dog)).toThrowError();
        expect(ageValidator.validate(dog)).toBeTruthy();
    });
});


// required and field missing
// required and field there but wrong type
// required and field there and right type
// not required and field missing
// not required and field there but wrong type
// not required and field there and right type
