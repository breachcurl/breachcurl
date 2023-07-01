const mongoose = require('mongoose')
const SubscribeSchema= new mongoose.Schema({
    subs : {
        type : String,
        Required : true,
    }
},{timestamps:true})
const SubscribeModel = mongoose.model('Subscribe',SubscribeSchema)
module.exports = SubscribeModel