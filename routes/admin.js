const path=require('path');
const express=require('express');
const router=express.Router();
const rootDir=require('../util/path.js');
router.get('/add-product', (req, res, next) => {

    //res.send('<h1>In the "Add product" page!');
    res.sendFile(path.join(rootDir,'views','add-product.html'));

})

router.post('/add-product', (req, res, next) => {
    console.log(req.body); //undefined
    res.redirect('/');
})

module.exports=router;