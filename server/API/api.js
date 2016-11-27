'use strict'

var fs = require('fs');
var path = require('path');
var listPaths = require('./listPaths');
var admin = require("firebase-admin");
var devModel = {};

if(process.env.NODE_ENV == 'development') {
	devModel = require('../JSON/devModel');
}

//load firebase object values form environment
var fbVars = {
  "type": process.env.AH_NUTS_FB_TYPE,
  "project_id": process.env.AH_NUTS_FB_PROJECT_ID,
  "private_key_id": process.env.AH_NUTS_FB_PRIVATE_KEY_ID,
  "private_key":  process.env.AH_NUTS_FB_PRIVATE_KEY,
  "client_email": process.env.AH_NUTS_FB_CLIENT_EMAIL,
  "client_id": process.env.AH_NUTS_FB_CLIENT_ID,
  "auth_uri": process.env.AH_NUTS_FB_AUTH_URI,
  "token_uri": process.env.AH_NUTS_FB_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.AH_NUTS_FB_AUTH_PROVIDER,
  "client_x509_cert_url": process.env.AH_NUTS_FB_CLIENT_CERT
};

console.log(fbVars);

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(fbVars),
  databaseURL: "https://ah-nuts.firebaseio.com"
});

var db = admin.database();

var api = {
	_create: _create,
	_read: _read,
	_update: _update,
	_delete: _delete,
	getList: getList,
	getLists: getLists
};

function _create() {}
function _read(path) {
	
	//TODO: ADD ERROR HANDLING

	var ref = db.ref(path);

	console.log('going out to firebase. Path:', path);

	return new Promise(function(resolve, reject) {

		ref.once('value', function(snapshot) {

			console.log('success:', snapshot.val());

			resolve(snapshot.val());

		})/*.catch(function(error) {

			console.log('error:', error);

			reject(error);

		})*/;

	});

}
function _update() {}
function _delete() {}

/*
*	getList(list)
*	Paramaters: a list name (String)
*	Returns: a Promise, 
*/
function getList(list) {

	return new Promise(function(resolve, reject) {

		if(process.env.CONNECTION_STATUS == 'Offline') {
			//If we're offline though, use the offline resources
			console.log('using offline resources');

			resolve(devModel['sales']['regions']);

		} else {
			//If we're online reach out to firebase database
			_read(listPaths[list]).then(function(response) {

				resolve(response);

			}).catch(function(error) {

				reject(error);

			});
		}

	});

}

function getLists(listsArray) {

	listArray.forEach(function(list) {

		getList(list);

	});

}

module.exports = api;