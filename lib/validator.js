const utils = require('../lib/types.js');

class Validator {
    constructor(field, configuration) {
        this.field = field;
        this.configuration = configuration;
        this.caster = utils.getCaster(configuration.type);
    };

    validate() {
        console.log(this.caster(this.field));
        // if(!this.configuration.required){
        //     return this.caster(this.field);
        // } else if (this.configuration.required && this.caster(this.configuration.type))
    }

    // validate(key, obj) {
    //     if()
    // }
}

// const nameValidator = new Validator('name', {
//     type: String,
//     required: true
//     });

module.exports = {
    Validator
}