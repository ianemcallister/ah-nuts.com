
//declare dependencies
var express = require('express');
var bodyParser = require('body-parser');
var envVars = require('./config/local.env');
var API = require('./API/api');
var dataManagement = require('./API/dataManagement.js');

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
	
	//call out to the FB db
	API.getList(req.params.name)
	.then(function(response) {

		res.send(response);

	}).catch(function(error) {

		res.send({"error": "There Was An Error"});

	});
	
});

app.get('/api/admin/test', function(req, res) {

	console.log('the url got hit');

	/*dataManagement.downloadFromDB().then(function(response) {

		res.send(response);

	});*/

	dataManagement.test().then(function(response) {
		res.send(response);
	})

});

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
});

//export the module
module.exports = app;