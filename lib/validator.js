const utils = require('../lib/types.js');

class Validator {
    constructor(field, configuration) {
        this.field = field;
        this.configuration = configuration;
        this.caster = utils.getCaster(configuration.type);
    }

    validate(obj) {
        const fieldValue = obj[this.field];
        console.log(fieldValue);
        if(this.configuration.required && !fieldValue){
            throw new Error('missing required field');
        } else if(!this.configuration.required && !fieldValue){
            return undefined;
        } else return this.caster(fieldValue);
    }
}

module.exports = {
    Validator
};
