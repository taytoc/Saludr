const apikey = process.env.SALUDR_API_KEY;
const apisecret = process.env.SALUDR_API_SECRET
const scopes = 'write_products';
const doteenv = require ('dotenv').config();
const express = require ('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce');
const querystring = require('querystring');
const request = ('request-promise');
const forwardingaddress = "https://boiling-inlet-58072.herokuapp.com/"

app.get(`/`, (req,res) => {
    res.send ('hello world!');
});
app.listen(3000,()=>{
    console.log('example app listening on port 3000!');
});