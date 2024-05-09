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

app.post("/api/shorturl", validateUrlFormat,  (req, res)=>
{
  const {url} = req.body;
  dns.lookup(req.body.hostname,async (error, adr, family)=>
  {
    if(error){res.send({ error: 'invalid url dns'});}
    else
    {
      let counter = await Url.countDocuments();
      const foundUrl = await Url.findOne({url: url});
      if(!foundUrl)
      {
        console.log(counter)
        counter+=1;
        const newUrl = new Url({url:url, shortener:counter});
        await newUrl.save();
        res.json({ "original_url" : url , "short_url" : counter});
      }
    }
  })
});


app.get("/api/shorturl/:shortener", async(req,res)=>
{
  const { shortener } = req.params;
  const foundUrl = await Url.findOne({shortener : shortener});
  if()
})
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
