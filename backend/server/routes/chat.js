const express = require('express');
const firebase = require('../config/config.js');
const router = express.Router()
require('dotenv').config();

const db = firebase.firestore();

// Saves a new message to your Cloud Firestore database.
router.post("/", (req, res) => {
    let message = req.body;
    db.collection('messages').add({
        name: "Christy", //getUserName(),
        text: message
        //profilePicUrl: getProfilePicUrl(),
        //timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
        console.error('Error writing new message to database', error);
    });
})

module.exports = router;