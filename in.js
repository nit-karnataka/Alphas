const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express()
const port = 3000
mongoose.connect('mongodb://localhost/tprogram2');
var Anyschema = new mongoose.Schema({ 
    name:String,
    mobile:{type:Number,unique:true},
    adhar:{type:Number,unique:true},
    age:Number,
    addr:String,
    blood:String,
    no_of_visits:String,
    disease:String,
    prev_med:String,
    doctor:String,
    medication:String,
    op_det:String,
    fname:String,
    lname:String,
    aadhno:Number,
    age:Number,
    bloodgrp:String,
    phoneno:Number,
    pcity:String,
    doctor:String,
    gender:String,
    disease:String,
    prescription:String,
    roomno:Number, 
    first_name:String,
    last_name:String,
    aadhar_num:Number,
    contact_num:Number,
    age:Number,
    blood_grp:String,
    P_disease:String,
    medicines:String, 
} );
var finalModel = mongoose.model('sr',Anyschema);
var jsonParser = bodyParser.json()


app.use(express.static('public'))
app.get('/', (req, res) => res.sendfile('./public/sihindex.html'))

app.get('/logs', (req, res) => res.sendfile('./public/doclogin.html'))

    app.post('/logs', jsonParser,function(req, res){
    console.log(req.body);
    var aid=req.body.aid;
    console.log(aid);
    var phone=req.body.phone;
    console.log(phone);
    
   sihfinalModel.findOne({doctor:aid}, function(err, resp){
    
            if(err){
                    console.log(err);
                    return res.status(500).send();
                 }
        if(req.body.aid==aid && req.body.phone==phone)
        {
        
        return res.json(resp)
        }
        })  
    });
