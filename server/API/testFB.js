'use strict'

var fs = require('fs');
var path = require('path');
var fbVars = require('../config/firebase.admin');
var admin = require("firebase-admin");

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(fbVars),
  databaseURL: "https://ah-nuts.firebaseio.com"
});

var db = admin.database();
var ref = db.ref('sales');
ref.once('value', function(snapshot) {
	console.log(snapshot.val());
});