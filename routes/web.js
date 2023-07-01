const express = require('express')
 const FrontendControllers = require('../controllers/FrontendControllers')
const router = express.Router()

// FrontendCOntrollers
router.get('/',FrontendControllers.home)
router.get('/getstarted',FrontendControllers.getstarted)
router.get('/quiz',FrontendControllers.quiz)
router.post('/contact',FrontendControllers.contact)
router.post('/feedback',FrontendControllers.feedback)
router.post('/subscribe',FrontendControllers.subscribe)




module.exports = router
