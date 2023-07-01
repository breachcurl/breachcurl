const express = require('express')
const app = express()
const port = 4000
const connectDB = require('./db/connect_db')
var bodyparser =require('body-parser')
var session = require('express-session')
var flash = require('connect-flash');
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// for file upload 
const fileUpload = require ("express-fileupload")
app.use(fileUpload({useTempFiles:true}));

// CLOUDINARY

// flash
app.use(flash());

// session
app.use(session({
    secret:'secret',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:false,
}));



// ================== web js =================

const web = require('./routes/web.js')
// body parser(de code the data)
app.use(bodyparser.urlencoded({extended:false}))


// load router
// ==================== web router====================
app.use('/',web)

// ============== set up Ejs============
app.set('view engine','ejs')


// link public file (static file)
app.use(express.static('public'))

//mongodb connection
connectDB();




//================= set up Server==========
app.listen(port,()=>{
    console.log(`server started on local host:${port}`)
})
