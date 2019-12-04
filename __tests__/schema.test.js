const { Schema } = require('../lib/schema.js');

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: String
    }
});

const spot = {
    name: 'spot',
    age: 5,
    weight: '20 lbs'
};

const rover = {
    name: 'rover',
    age: '10'
};

const fido = {
    name: 'Fido',
    age: 'hi'
};

const lassie = {
    age: 80
};

describe('Schema class tests', () => {
    it('should return the input object if it fits the schema', () => {
        expect(schema.validate(spot)).toEqual({ name: 'spot', age: 5, weight: '20 lbs' });
        expect(schema.validate(rover)).toEqual({ name: 'rover', age: 10 });
    });
    it('should throw an error if missing required fields or cannot cast a field', () => {
        expect(() => {schema.validate(fido);}).toThrowErrorMatchingSnapshot();
        expect(() => {schema.validate(lassie);}).toThrowError('missing required field');
    });
});

