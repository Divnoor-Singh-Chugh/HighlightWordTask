const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath))
app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
console.log('Server listening on port 3000');
})