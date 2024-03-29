const mongoose = require('mongoose');
require('dotenv').config();
//Define the mongoDB connection on url
//const mongoURL = 'mongodb://localhost:27017/hotels';//right now we have set up mongodb on our local setup..so this url has been used
//const mongoURL = 'mongodb+srv://prajwalshaw1709:Ge0y1Q7XKO8AlP0e@cluster0.5mshe.mongodb.net/';//now our db is hosted online on mongodb
const mongoURL = process.env.MONGODB_URL;
//setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

//get the default connection
const db = mongoose.connection;


db.on('connected',()=>{//here 'connected' is the event listener
   console.log('MongoDB connected');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error',err);
 });

 db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
 });

 module.exports = db;

 //Ge0y1Q7XKO8AlP0e
 //EpK4Yh4DmxUQiaB1