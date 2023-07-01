const mongoose = require('mongoose')
const ContactSchema= new mongoose.Schema({
    fname:{
        type : String,
        Required : true,
    },
    lname:{
        type : String,
        Required : true,
    },
    mail : {
        type : String,
        Required : true,
    },
    mess:{
        type : String,
        Required : true,
    },
    more:{
        type : String,
        Required : true,
    },
},{timestamps:true})
const ContactModel = mongoose.model('contact',ContactSchema)
module.exports = ContactModel