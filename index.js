var express = require('express')
var app = express()
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    // res.sendFile(__dirname+'/statics/');
    res.render('template', { title: 'Express' });
})
// app.use(express.static(__dirname + '/statics/'))

app.listen((process.env.PORT || 5000), function() {
    console.log("Node app is running at localhost:" + (process.env.PORT || 5000))
})
