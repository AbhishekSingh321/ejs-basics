const express=require('express')
const path = require('path');

const app=express()

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/ig/:username',(req,res)=>{
  const instaData=require('./data.json')
  let {username}=req.params
  const data=instaData[username]
  if(data)
   res.render('page.ejs',{data})
  else{
    res.render('error.ejs',{errorImg : '/error.png',username})
  }
})

app.listen(3000)