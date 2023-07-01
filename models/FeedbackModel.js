const mongoose = require('mongoose')
const FeedbackSchema= new mongoose.Schema({
    name:{
        type : String,
        Required : true,
    },
    mail : {
        type : String,
        Required : true,
    },
    addtional:{
        type : String,
        Required : true,
    }
},{timestamps:true})
const FeedbackModel = mongoose.model('Feedback',FeedbackSchema)
module.exports = FeedbackModel