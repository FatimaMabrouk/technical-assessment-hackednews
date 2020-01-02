var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    by: String, // auther
    title: String,
    score: Number
});

var StoryModel = mongoose.model('Story', storySchema);

// var story = new StoryModel({ id: id.type, by: by.title });
// findAll retrieves all stories


// var insertOne = story.save(function(err, story) {
//     if (err) console.log(err);
//     story.create({ id: id, by: by })
// });

// var findAll = story(function(err, story) {
//     if (err) console.log(err);
//     story.findAll({ id: id, by: title })
// });

function findAll(callback) {
    StoryModel.find({ id: id, by: by }, callback);
}

// // findOne will retrieve the story associated with the given id
function findOne(id, callback) {
    StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
    StoryModel.create(story, callback);
}


exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;