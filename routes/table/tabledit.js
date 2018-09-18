var express = require('express');
var router = express.Router();

var data = [
   {
      "id": 1,
      "plant": "公司A",
      "place": "北京",
      "owner": "李丹",
      "preparation": 20,
      "bz": "yyyyyyyyyyyyyyyyyyyy",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },{
      "id": 2,
      "plant": "公司B",
      "place": "武汉",
      "owner": "里斯本",
      "preparation": 12,
      "bz": "yyyyyyyyyyyyyyyyyyyy",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 3,
      "plant": "公司C",
      "place": "北京",
      "owner": "瓦克",
      "preparation": 17,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 4,
      "plant": "公司D",
      "place": "成都",
      "owner": "佳丽",
      "preparation": 18,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 5,
      "plant": "公司E",
      "place": "合肥",
      "owner": "元俊",
      "preparation": 19,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 6,
      "plant": "公司F",
      "place": "北京",
      "owner": "松江",
      "preparation": 20,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 7,
      "plant": "公司G",
      "place": "合肥",
      "owner": "原哈",
      "preparation": 21,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
   {
      "id": 8,
      "plant": "公司H",
      "place": "台湾",
      "owner": "王继",
      "preparation": 22,
      "bz": "xxxx",
      "createdAt": "2018-03-09T01:11:00.000Z",
      "updatedAt": "2018-03-09T01:11:00.000Z",
      "deletedAt": null
   },
];

// page tabledit
router.get('/', function(req,res,next){
  res.locals.dataList = data;
  next();
},function(req, res, next){
  res.render('example-table/tabledit', {
    title: 'example-tabledit'
  });
});

// tabledit ajax operator
router.post('/ajax' , function(req,res,next){
  var action = req.body.action;
  var id = req.body.table_id;
  if(action == 'delete'){
      console.log('--------- you need do something to delete your data');
      res.send(JSON.stringify({message: 'delete ok'}));
  }else if(action == 'edit'){
      console.log('--------- you need do something to update your data');
      res.send(JSON.stringify({message: 'edit ok'}));
  }else if(action == 'restore'){
      console.log('--------- you need do something to restore your data');
      res.send(JSON.stringify({message: 'restore ok'}));
  }
});

module.exports = router;