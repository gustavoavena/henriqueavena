var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var path = require("path");

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// app.use(express.static('static'));
app.use(express.static(__dirname + '/static'));



app.get('/',function(req,res){
  // res.sendFile(path.join(__dirname+'/views/index.html'));
  res.render('index');
  //__dirname : It will resolve to your project folder.
});

app.get('/fazenda',function(req,res){
  res.render('fazenda');
  //__dirname : It will resolve to your project folder.
});

app.get('/fotos',function(req,res){
  res.render('fotos');
  //__dirname : It will resolve to your project folder.
});


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT || 3000, function() {
	console.log("Listening on port 3000");
});
