var express = require('express');
// var http = require('http');
// var url = require('url');
// var fs = require('fs');
var bodyParser  = require('body-parser'),
app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/client/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname));
// app.use(express.bodyParser());
// app.use(app.router)


var port = process.env.PORT || 1337;
app.listen(port);


app.get('/', function(req, res){
  res.render('index.html')
})
// app.post()