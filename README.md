PR Link: https://github.com/ianandrewson/Lab02-Schemas/pull/1

LAB: Schemas

This is the second lab in a three day series about schema and schema validation. For this lab, you’ll use Jest to test a Validator class and a Schema class.
Before you begin

Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.
Getting Started

In the starter_code folder there is a completed version of yesterdays lab. You can use the starter_code or use the code you worked on yesterday. In either case, take a look at the started_code and compare it to your code from yesterday.
Requirements

USE TDD Practices

    Validator class
    Schema class

Validator

The Validator class is used to validate and cast a single field in an object.

Testing

    Test that validate method can take an object and return a fields value
    Test that validate method can take an object and throw an error
    Test all permutations:
        required and field missing
        required and field there but wrong type
        required and field there and right type
        not required and field missing
        not required and field there but wrong type
        not required and field there and right type

Implementation

    Validator is initialize with two parameters: field and configuration
        use your getCaster method from yesterdays lab to get the correct castTo* function based on type from the configuration parameter passed in
    Validator has a validate method that takes an object to validate
        make sure the field is there if it is required
        use the castTo* function to cast the field

Schema

The Schema class is used to validate and cast an entire object.

Testing

Don’t retest functionality already tested by your Validator tests

    Test that validate method returns the object with all fields cast
    Test that validate method throws an error if the object doesn’t follow the schema

Implementation

    Schema is initialized with an object defining a schema (schemaDefinition)
        use the object to create an array of Validators for each key/value in schemaDefinition and store the array in this.validators Schema has a validate method that takes an object
        invoke the validate method for each Validator in this.validate

Rubric

    Validator - 6 points
    Schema - 4 points
