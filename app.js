const path=require('path');
const express = require('express');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');

const app = express();
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/contactus',contactRoutes);
app.use('/success',(req,res)=>{
res.sendFile(path.join(__dirname,'views','success.html'));
})
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(4000);