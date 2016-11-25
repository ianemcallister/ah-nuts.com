'use strict'

var fs = require('fs');
var path = require('path');
var envVars = require('../config/local.env');
var firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: envVars.APIKEY,
  authDomain: envVars.AUTHDOMAIN,
  databaseURL: envVars.DATABASEURL,
  storageBucket: envVars.STORAGEBUCKET,
};
firebase.initializeApp(config);

var database = firebase.database();

var DataManagement = {
	_loadJSONFile:_loadJSONFile,
	getList: getList,
	downloadFromDB:downloadFromDB,
	test: test
};

function _loadJSONFile(fileName) {
	var thisPath = path.join(__dirname,'../', 'JSON', fileName);
	console.log('loading at this path', thisPath);
	var returnObject = fs.readFileSync(thisPath);
	//console.log('got this back', returnObject);
	//console.log('parsing it',JSON.parse(returnObject) );
	return JSON.parse(returnObject);
}

function getList(listName) {

	return _loadJSONFile(listName + '.json');
}

function downloadFromDB() {

	var dbMessage = firebase.database().ref('sales');

	return new Promise(function(resolve, reject) {

		dbMessage.once('value', function(snapshot) {
			
			resolve({'testing':'Good Test'});

		});

	});
}

function test() {

	var dbMessage = database.ref('sales');

	console.log(dbMessage);

	return new Promise(function(resolve, reject) { 
		resolve({'it worked':"success"});
	});
}

module.exports = DataManagement;