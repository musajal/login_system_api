require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
const PORT = 8036
const FamilySchema = require('./models/Famill')

app.use(express.json())
app.use(cors({
    origin: 'https://auth-system-olnc.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // This enables passing cookies and other credentials
  }))

mongoose.connect(process.env.DBMS_URL)

app.post('/register', (req, res)=>{
    FamilySchema.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.post('/signin', (req, res)=>{
    const {email, password} = req.body
    FamilySchema.findOne({email:email})
    .then(user=>{
       
        if(user)
        {
            if(user.password = password)
            {
                res.json("success")
            }
            else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("no records exist")
        }
    })
    
})

app.listen(PORT, ()=>console.log(`i am listerning on PORT ${PORT}`))