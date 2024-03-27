const express = require('express');
const router = express.Router();//manages routes

const MenuItem = require('./../models/MenuItem');

//POST route to add a menu
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("data saved successfully");
         res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//GET route to get menu data
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

module.exports = router;