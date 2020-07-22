const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

let albums = data.albums

let artwork = []

router.get('/', (req, res) => {

    for (cd in albums){
        artwork = artwork.concat(cd.artwork)
    }

    res.render('index', {
        albums: albums,
        images: artwork
    })
})

module.exports = router;