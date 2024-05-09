require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {validateUrlFormat} = require("./middlewares/middleware");
const app = express();
const dns = require("dns");
const { error } = require('console');
const connect = require("./models/connection");
const Url = require("./models/model");

//DataBase Connection
connect;
// Basic Configuration
const port = process.env.PORT || 3000;
app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//Routing
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post("/api/shorturl", validateUrlFormat, (req, res)=>
{
  dns.lookup(req.body.hostname, (error, adr, family)=>
  {
    if(error){res.send({ error: 'invalid url dns'+ error });}
    else
    {
      
    }
  })
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
