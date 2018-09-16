
module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  app.use('/tabledit', require('./table/tabledit.js'));
  app.use('/bootstrap-table', require('./table/bootstrap-table.js'));
  app.use('/datatables', require('./table/datatables.js'));

  app.use('/users', require('./users'));
}





