var Movie = require('./../models/movieModel');

var get = function(req, res){
   Movie.find(function(err, movie){
       if(err) {
           res.status(500);
           res.send('Internal Server Error');
       }
       else {
           res.status(200);
           res.send(movie);
       }
   });
}

var add = function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err){
        if(err){
            res.status(500);
            res.send('Failed');
        }
        else {
            res.status(200);
            res.send(movie);
        }
    });
};

var getById = function(req, res) {
    Movie.findById(req.params.id, function(err, movie){
        if(err){
            res.status(404);
            res.send('Record Not Found');
        } else {
            res.status(200);
            res.send(movie);
        }
    });
}

var update = function(req, res){
    Movie.findById(req.params.id, function(err, movie){
        if(err){
            res.status(400);
            res.send('File Not Found');
        }
        else{
            movie.title = req.body.title;
            movie.genre = req.body.genre;
            movie.rating = req.body.rating;
            movie.isReleased = req.body.isReleased;

            movie.save(function(err){
                if(!err) {
                    res.status(200);
                    res.send(movie);
                } else {
                    res.status(500);
                    res.send('Internal Server Error');
                }
            });

        }
    });
}

module.exports = {
    add: add,
    get:get,
    getById: getById,
    update:update
};