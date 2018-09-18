var express = require('express');
var router = express.Router();

// bootstrap-table
router.get('/', function(req, res, next){
  res.render('example-table/bootstrap-table', {
    title: 'example-bootstrap-table'
  });
});
// X-editable data
router.post('/edit', function(req,res,next){
  res.send('success');
});

module.exports = router;