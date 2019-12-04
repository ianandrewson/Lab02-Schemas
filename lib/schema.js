// Schema is initialized with an object defining a schema (schemaDefinition)
// use the object to create an array of Validators for each key/value in schemaDefinition and store the array in this.validators Schema has a validate method that takes an object
// invoke the validate method for each Validator in this.validate
const { Validator } = require('../lib/validator.js');
class Schema {
    constructor(schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        this.validators = [];
        for(let key in this.schemaDefinition){
            const validator = new Validator(key, schemaDefinition[key]);
            this.validators.push(validator);
        }
    }
    

    validate(inputObject) {
        let result = {};
        this.validators.forEach(validator => {
            //console.log(`result: ${result}, validator: ${validator}, inputObject: ${inputObject}`);
            console.log(result);
            console.log(validator);
            console.log(inputObject);
            result[validator.field] = validator.validate(inputObject);
        });
        console.log(result);
        return result;
    }
}

module.exports = {
    Schema
};