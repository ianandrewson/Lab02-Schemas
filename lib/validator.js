const utils = require('../lib/types.js');

class Validator {
    constructor(field, configuration) {
        this.field = field;
        this.configuration = configuration;
        this.caster = utils.getCaster(configuration.type);
    }

    validate(obj) {
        const fieldValue = obj[this.field];
        if(this.configuration.required){
            if(fieldValue && this.caster(fieldValue)) {
                return this.caster(fieldValue);
            } else throw new Error('missing required field');
        } else if(!this.configuration.required){
            if(this.caster(fieldValue)) {
                return this.caster(fieldValue);
            }
        }
    }
}

module.exports = {
    Validator
}
