var express = require('express');
var app = express();

var getStuff = function(req, res){
  console.log('request=', req);
  console.log('response=', res);
  res.send('Hello World!');
};
var postSecret  = function(req, res){
  console.log('request=', req);
  console.log('response=', res);
  res.send('Recieved a Post');
};

app.get('/', getStuff);
app.post('/', postSecret);


app.listen(3000);
