
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product',(req,res,next)=>{
 
//res.send('<h1>In the "Add product" page!');
res.send('<form action="/product" method="POST" ><input type="text" name="Item"><br><br><input type="text" name="size"><button type="submit">Add product</button></form>');
 
})

app.use('/product',(req,res,next)=>{
    console.log(req.body); //undefined
res.redirect('/');
})
app.use('/',(req,res,next)=>{
   
    res.send('<h1>HOME PAGE</h1>');
})

app.listen(4000);