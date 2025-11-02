const express=require('express')
const app=express()

app.set('view engine','ejs')

app.get('/ig/:username',(req,res)=>{
  const instaData=require('./data.json')
  let {username}=req.params
  const data=instaData[username]
  res.render('page.ejs',{data})
})

app.listen(3000)