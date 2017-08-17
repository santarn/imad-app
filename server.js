var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1={
    title:'Article one | Santosh Jain',
    heading:'Article One',
    date:'15 sep 2000',
    content:'This is the content of article one'
};

var htmltemp=`
<!DOCTYPE html>
<html>
     <head>
        <title>
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
   <div class="cont">
    <div>
       <a href="/">Home</a>
    </div>
    <hr/>
    <h1></h1>
    <div>
        
    </div>
        
    <div>
        <p></p>
    </div>
    </div>
    
   
</html>

`;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','article3.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','article2.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname,'ui' ,'article1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
