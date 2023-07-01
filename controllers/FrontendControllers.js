const ContactModel = require("../models/ContactModel")
const FeedbackModel = require("../models/FeedbackModel")

class FrontenControllers{

    static home = async(req,res)=>{
        try{
            res.render('Front/home')
        }catch(err){
            console.log('error in home')
        }
    }
// started
static getstarted = async(req,res)=>{
    try{
        res.render('Front/getstarted')
    }catch(err){
        console.log('error in login')
    }
}
// Quiz
static quiz = async(req,res)=>{
    try{
        res.render('Front/quiz')
    }catch(err){
        console.log('error in quiz')
    }
}
// contact data

static contact = async(req,res)=>{
    try{
        const data = new ContactModel({

            fname:req.body.fname,
            lname:req.body.lname,
            mail:req.body.mail,
            mess:req.body.mess,
            more:req.body.more,
    })
    await data.save()
    res.redirect('/')
    // console.log(data)
    }catch(err){
        console.log('error in insert contact')
}
}
// Feedback code 
    static feedback = async(req,res)=>{
        try{
            const data = new FeedbackModel({
                name:req.body.name,
                mail:req.body.mail,
                additional:req.body.additional
            })
            await data.save()
            res.redirect('/')
            console.log(data)
        }catch(err){
            console.log('error in feedback')
        }
    }
    // subscribe
    static subscribe =async(req,res)=>{
        // console.log('hekk')
        try{
           const data = new SubscribeModel({
            subs:req.body.subs
           })
            await data.save()
            res.redirect('/')
            console.log(data)
        }catch(err){
            console.log('error in subscribe ')
        }
    }
}


module.exports=FrontenControllers