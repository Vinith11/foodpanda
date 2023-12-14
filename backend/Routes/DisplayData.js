const express = require("express");
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try{
        res.send([global.food_items, global.foodCategory])
        //res.send([data, Catdata])
    }catch(error){
        console.error(error.message)
    }
})

module.exports=router;