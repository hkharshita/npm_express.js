const express=require('express');
const router=express.Router();

router.get('/add-product', (req, res, next) => {

    //res.send('<h1>In the "Add product" page!');
    res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="Item"><br><br><input type="text" name="size"><br><br><button type="submit">Add product</button></form>');

})

router.post('/add-product', (req, res, next) => {
    console.log(req.body); //undefined
    res.redirect('/');
})

module.exports=router;