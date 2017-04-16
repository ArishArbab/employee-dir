var express = require('express'),
        app = express(),
     server = require('http').createServer(app),
       path = require('path'),
 bodyParser = require('body-parser');
     config	= require('./server/config/config'),
     	 db = require('./server/config/db'),
  employee  = require('./server/employee/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/')));
app.use('/employee', employee);
app.get('*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = config.server.port;

server.listen(port,function(){
	console.log('Server started at',port);
});

module.exports = app;
