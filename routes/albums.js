const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

let albums = data.albums

let artwork = []

for (cd in albums){
        artwork = artwork.concat(cd.artwork)
}

router.get('/albums/(:id)?', (req, res) => {

    let albumName = req.params.id
    let ID = 0;

    for (const key in albums) {
        if (albumName == albums[key].shortName){
            ID = albums[key].id
        }
    }



    res.render('albumView', {
        albums: albums,
        images: artwork,
        ID: ID
    })
})

module.exports = router;