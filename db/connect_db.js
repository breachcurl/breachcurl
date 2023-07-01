const mongoose = require('mongoose')

const connectDB = ()=>{
    return mongoose.connect('mongodb://0.0.0.0:27017/E-learn')

    .then(()=>{
        console.log('connection succesfull')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB