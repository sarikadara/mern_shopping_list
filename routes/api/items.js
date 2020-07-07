const express = require('express');
const router = express.Router();


//item model
const item = require('../../models/item');

// Route get api/items
//@desc get all items
//@access public

router.get('/', (req, res) =>{
    item.find()
    .sort({ date: -1 })
     .then(items => res.json(items))
});

     
    


module.exports = router;