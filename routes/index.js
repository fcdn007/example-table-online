
module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Example Table Online' });
  });

  app.use('/tabledit', require('./table/tabledit.js'));
  app.use('/bootstrapTable', require('./table/bootstrap-table.js'));
  app.use('/datatables', require('./table/datatables.js'));

  app.use('/users', require('./users'));
};





