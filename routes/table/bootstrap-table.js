var express = require('express');
var router = express.Router();

// bootstrap-table
router.get('/', function(req, res, next){
  res.render('example-table/bootstrap-table', {
    title: 'example-bootstrap-table'
  });
});
// Get table data
router.get('/data', function(req,res,next){
  res.send();
});

module.exports = router;