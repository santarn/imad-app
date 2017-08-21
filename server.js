var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var articles={ 
'article-one':{
    title:'Article one | Santosh Jain',
    heading:'Article One',
    date:'15 sep 2000',
    content:'This is the content of article one'
}, 'article-two':{
    title:'Article two | Santosh Jain',
    heading:'Article two',
    date:'15 oct 2000',
    content:'This is the content of article two'
},
 'article-three':{
    title:'Article three | Santosh Jain',
    heading:'Article three',
    date:'15 sep 2020',
    content:'This is the content of article three'
}
};
function createht(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemp=`
<!DOCTYPE html>
<html>
     <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
   <div class="cont">
    <div>
       <a href="/">Home</a>
    </div>
    <hr/>
    <h1>${heading}</h1>
    <div>
        ${date}
    </div>
        
    <div>
        <p>${content}</p>
    </div>
    </div>
    
   
</html>

`; return htmltemp}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var config=
{
    user:'santoshjain2198'
};

var counter=0;
app.get('/counter', function (req, res) {
   counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

app.get('/:articleNames', function (req, res) {
    var articleNames=req.params.articleNames;
    res.send(createht(articles[articleNames]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
