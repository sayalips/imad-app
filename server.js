var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles={
   articleOne:{
       title:'Article One sayalips',
    heading:'Article One',
    

    
    content: `
    
     <p>
                  This is article one.This is article one. This is article one.This is article one.This is article one. This is article one.
                This is article one.This is article one.This is article one. This is article one.
                  </p>
                  <p>
                      This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.This is content for my first article.
                      </p>`
   },
   articleTwo:{
       title:'Article Two sayalips',
    heading:'Article Two',
    
    content: `
    

                  <p>
                      This is content for my second article.
                      </p>`
   },
   articleThree:{
       
        title:'Article Three sayalips',
    heading:'Article Three',
    
    content: `
    

                  <p>
                      This is content for my third article.
                      </p>`
   }
   
   

               
   
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`

<html>
    <head>
        <title> ${title} </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
        
        <body>
            
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3> ${heading}</h3>
            <div>
              ${content}
                </div>
                
                </div>
        </body>
</html>



`
   ; 
   return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one.html', function (req, res) {
  res.send(createTemplate(articleOne));
});



    
app.get('/article-two.html', function(req,res){
 res.send(createTemplate(articleTwo));
    
});

app.get('/article-three.html', function(req,res){
 res.send(createTemplate(articleThree));
    
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
