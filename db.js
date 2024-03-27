const mongoose = require('mongoose');

//Define the mongoDB connection on url
const mongoURL = 'mongodb://localhost:27017/hotels';

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