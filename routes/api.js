const express = require('express');
const router = express.Router();

// need to write data to local file
const fs = require('fs');

// need to import body-parser to grab data from headers
const bodyParser = require('body-parser');

// read feedback file into this route
const forumData = require('../data/forum.json'); // This is an array of objects!


// send data back to client as json object
// similar to api call from the client

router.get('/api', (req, res) => {
    
    
    res.json(forumData); //This express method with stringify the data for us



})

// this route will update the forum.json file
// read the submitted data off of the header file with body-parser
// body-parser puts body object onto request object

// from documentation on how to set up body-parser

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/api', (req, res) => {  // Data sent from our page to be placed into the storage file
    
    console.log(req.body);
    forumData.unshift(req.body)
    fs.writeFile('data/forum.json', JSON.stringify(forumData), 'utf8', (err) => {
        
        if (err){
            console.log(err);
        }
        
    })

    res.json(forumData);
})

// Delete function

router.delete('/api/:id', (req, res) => {
    
    console.log(req.body);
    console.log(req.params.id);
    // forumData.unshift(req.body)
    forumData.splice(req.params.id, 1)
    fs.writeFile('data/forum.json', JSON.stringify(forumData), 'utf8', (err) => {
        
        if (err){
            console.log(err);
        }
        
    })

    res.json(forumData);
})


module.exports = router;