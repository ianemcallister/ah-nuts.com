
//declare dependencies
var express = require('express');
var bodyParser = require('body-parser');
var API = require('./API/api');
var dataManagement = require('./API/dataManagement.js');
var defaultLists = require('./JSON/defaultLists')

//define the app
var app = express();

//define the port
var port = process.env.PORT || 3000;

//get the URL encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//define our body parsers
app.use(jsonParser); // for parsing application/json
app.use(urlencodedParser); // for parsing application/x-www-form-urlencoded

//tell it the folder to serve
app.use(express.static('dist'));

//define the routes
app.get('/api/get/list/:name', function(req, res) {
	
	//note the url hit
	console.log('/api/get/list/', req.params.name );

	//call out to the FB db
	API.getList(req.params.name)
	.then(function(response) {

		res.send(response);

	}).catch(function(error) {

		res.send({"Error": error, "Default List": defaultLists['Retail']});

	});
	
});

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
	console.log('Running in ' + process.env.NODE_ENV + ' environment');
	console.log("Internet Connection Status: " + process.env.CONNECTION_STATUS);
});

//export the module
module.exports = app;