var express = require('express');
var router = express.Router();

// datatables
router.get('/', function(req, res, next){
  res.render('example-table/datatables', {
    title: 'example-datatables'
  });
});
router.get('/data', function(req,res,next){
  res.send();
});

module.exports = router;