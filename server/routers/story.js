var express = require('express');
var storyController = require('../../db/models/story.js');
// var storyController = require('../../db/controllers/story.js');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        // TODO: Replace this with stories you've retrieved from the database
        res.json([{
                author: 'ocdtrekkie',
                title: 'Switch – New Video Game System [video]',
                score: 536
            },
            {
                author: 'mhb',
                title: 'Video Games Are Changing the Way Soccer Is Played',
                score: 100
            }
        ]);
    });

// Here we use express's route params
router.route('/:id')
    .get(function(req, res) {

        var par = req.params;
        res.send(par);
        console.log(par)
    });

module.exports = router;