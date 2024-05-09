require('dotenv').config();
const express = require('express');
const cors = require('cors');
const url = require("url");
const {validateUrl} = require("./middlewares/middleware");
const app = express();

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

app.post("/api/shorturl", validateUrl, (req, res)=>
{
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
