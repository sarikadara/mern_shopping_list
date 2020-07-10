const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//item model
const item = require('../../models/item');

// Route get api/items
//@desc get all items
//@access public

router.get('/', (req, res) => {
    item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});
//Route get post api/items
//@desc create post
//@access private

router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});
// Route delete api/items
//@desc create an item
//@access private

router
    .delete('/:id', auth, (req, res) => {
        item.findById(req.params.id)
            .then(item => item.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));

    })

module.exports = router;