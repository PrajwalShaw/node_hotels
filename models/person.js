const mongoose = require('mongoose');

//define the person schema
const personSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    mobile:{
        type: String,
        required:true
    },
    work:{
        type: String,
        enum: ['owner','waiter','chef'],
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    }
})

//create person model
const Person  = mongoose.model('Person',personSchema);
module.exports = Person;