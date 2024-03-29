const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();//server ko bhi malum hona chahiye ki dotenv bol ke koi file hain

const bodyParser = require('body-parser');//body-parser basically frontend se jo data aa raha hoga na usko JSON format se object main convert karega aur req.body main store karega
app.use(bodyParser.json());
// const Person = require('./models/person');
//const MenuItem = require('./models/MenuItem');
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello there welcome to my restaurant');
  })


app.get('/chicken',(req,res)=>{//frontend par yeh api(/chicken) use kar ke data le sakta hain using get method...get method sirf apko data deta hain..le nahi sakta
    res.send('sure sir ,I would love to serve chicken');
})

app.get('/idli',(req,res)=>{
    res.send('sure sir,here is your idli');
})
  

//POST route to add a person
// app.post('/person',async(req,res)=>{
//     try{
//         const data = req.body;//assuming the req.body contains the person data(name,email,mobile,work age)

//         //create a new Person document using Mongoose model
//         const newPerson = new Person(data);
   
//         //save the new person to the database
//         const response = await newPerson.save();//tab tak wait karo jab tak newPerson main data save nahi ho jata 
//         console.log("data saved successfully");
//          res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//          res.status(500).json({error: 'Internal server error'});
//     }
    
// })

//GET method to get the person data
// app.get('/person',async(req,res)=>{
//       try{
//          const data = await Person.find();
//          console.log('data fetched');
//          res.status(200).json(data);
//       }
//       catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal server error'});
//       }
// })

// //POST route to add a menu
// app.post('/menu',async(req,res)=>{
//     try{
//         const data = req.body;
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         console.log("data saved successfully");
//          res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal server error'});
//     }
// })

// //GET route to get menu data
// app.get('/menu',async(req,res)=>{
//     try{
//         const data = await Person.find();
//          console.log('data fetched');
//          res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal server error'});
//     }
// })


// app.get('/person/:workType',async(req,res)=>{
//     try{
//         const workType = req.params.workType;//extract the workType from the url
//         if(workType=='chef'||workType=='waiter'|| workType=='manager'){
//            const response = await Person.find({work:workType});
//            console.log('Response fetched');
//            res.status(200)
//         }
//         else{
//             res.status(404).json({error: 'Invalid worktype'});
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal server error'});
//     }
// })

//import the router
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the router
app.use('/person',personRoutes);//person was common endpoint
app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
    console.log('Listening on port 3000');
})
//ab dekho frontend par jab humlog submit button par click karte hain tab backend par api main woh data aata hain aur phir api uss data ko server tak pahuchata hain