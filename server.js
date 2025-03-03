const express = require('express');
const port = 8003;
const path = require('path');

const server = express();

server.use(express.urlencoded());
server.set("view engine","ejs");

server.use("/",express.static(path.join(__dirname,"public")));

server.get('/',(req,res) =>{
    res.render('index')
});

server.get('/avatars',(req,res) =>{
    res.render('avatars')
});
server.get('/buttons',(req,res) =>{
    res.render('buttons')
});
server.get('/font-awesome-icons',(req,res) =>{
    res.render('font-awesome-icons')
});
server.get('/gridsystem',(req,res) =>{
    res.render('gridsystem')
});
server.get('/notifications',(req,res) =>{
    res.render('notifications')
});
server.get('/panels',(req,res) =>{
    res.render('panels')
});
server.get('/simple-line-icons',(req,res) =>{
    res.render('simple-line-icons')
});
server.get('/sweetalert',(req,res) =>{
    res.render('sweetalert')
});
server.get('/typography',(req,res) =>{
    res.render('typography')
});






server.listen(port,()=>{
    console.log(`server started at http://localhost:8003`);
});


