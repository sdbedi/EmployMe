let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Search = mongoose.model('Search');
let axios = require('axios'); //promise based req library for nodejs


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:location/:keyword/:ipAddress/:timestamp', function(req, res, next) {
    let search = new Search(req.params);
    console.log("search", search);
    search.save(function(err, search){
      if(err){ return next(err); }
      //res.json(search);
    });
    
    axios.get('http://api.indeed.com/ads/apisearch?publisher=7248052928136281&format=json&q='+ req.params.keyword + '&l=' + req.params.location + '&sort=date&radius=25&st=&jt=&start=&limit=20&fromage=30&filter=&latlong=1&co=us&chnl=FJR&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
    .then(function(response){
      console.log(response.data.results); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
      res.json(response.data.results);
    });  
});

//This route retrieves all searches from the DB

router.get('/searches', function(req, res, next) {
  Search.find(function(err, searches){
    if(err){ return next(err); }

    res.json(searches);
  });
});

//The route below clears all saved search from the DB. Uncomment to enable. 
//Note: this route is NOT connected to the Front End AT ALL. It can accessed through curl or the browser bar by appending '/wipe' tp whatever the base url is.

// router.get('/wipe', function(req, res, next) { 
//   Search.remove({}, function(err) { 
//    console.log('search removed') 
//   });
// });

module.exports = router;