var express = require('express');
var app = express();
var path = require("path");


process.env.PWD = process.cwd()
// app.use(express.static('static'));
// app.use(express.static(__dirname + '/static'));
app.use(express.static(process.env.PWD + '/static'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT || 3000, function() {
	console.log("Listening on port 3000");
});

