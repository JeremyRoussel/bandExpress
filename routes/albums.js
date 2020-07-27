const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

let albums = data.albums

let artwork = []

for (cd in albums){
        artwork = artwork.concat(cd.artwork)
}

router.get('/albums/(:id)?', (req, res) => {

    let albumName = req.params.id  // Identify the parameter from the URI 
    let ID = 0;  // Set a default album to view if none is selected, or the user types an album that doesn't exist

    for (const key in albums) {     // Use this loop to transform the album name from the URI into a numerical key
        if (albumName == albums[key].shortName){        // This is done for convenience amd to keep the URI human-readable
            ID = albums[key].id
        }
    }

    res.render('albumView', {   // Send the required data to the render
        albums: albums,
        images: artwork,
        ID: ID
    })
})

module.exports = router;