'use strict'

var fs = require('fs');
var path = require('path');
var fbVars = require('../config/firebase.admin');
var listPaths = require('./listPaths');
var admin = require("firebase-admin");

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

	return new Promise(function(resolve, reject) {

		ref.once('value', function(snapshot) {

			resolve(snapshot.val());

		});

	});

}
function _update() {}
function _delete() {}

function getList(list) {

	return new Promise(function(resolve, reject) {

		_read(listPaths[list]).then(function(response) {

			resolve(response);

		});

	});

}

function getLists(listsArray) {

	listArray.forEach(function(list) {

		getList(list);

	});

}

module.exports = api;