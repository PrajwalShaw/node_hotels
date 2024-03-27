const express = require('express');
const router = express.Router();//manages routes

const Person = require('./../models/person');
const { findByIdAndUpdate } = require('../models/MenuItem');

//GET method to get the person data
router.get('/',async(req,res)=>{
    try{
       const data = await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
})

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data = req.body;//assuming the req.body contains the person data(name,email,mobile,work age)

        //create a new Person document using Mongoose model
        const newPerson = new Person(data);
   
        //save the new person to the database
        const response = await newPerson.save();//tab tak wait karo jab tak newPerson main data save nahi ho jata 
        console.log("data saved successfully");
         res.status(200).json(response);
    }
    catch(err){
        console.log(err);
         res.status(500).json({error: 'Internal server error'});
    }
    
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;//extract the workType from the url
        if(workType=='chef'||workType=='waiter'|| workType=='manager'){
           const response = await Person.find({work:workType});
           console.log('Response fetched');
           res.status(200)
        }
        else{
            res.status(404).json({error: 'Invalid worktype'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//UPDATE
router.put('/:id',async(req,res)=>{
    try{
          const personId = req.params.id;//extract the id from the url parameter
          const updatedPersonData = req.body;//updated data from the person
          
          const response  = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new : true, //update hone ke baad jo naya document hain usko as a response send karega
            runValidators : true //will check all the validators
          })
       
          if(!response){
            return res.status(404).json({error : 'Person not found'});
          }

          console.log('data updated successfully');
          res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//DELETE
router.delete('/:id',async(req,res)=>{
    try{
          const personId = req.params.id;

          const response  = await Person.findByIdAndDelete(personId);
          if(!response){
            return res.status(404).json({error : 'Person not found'});
          }
         
          console.log('data deleted successfully');
          res.status(200).json(response); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


module.exports = router;