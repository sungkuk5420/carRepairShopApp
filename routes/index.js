var express = require('express');
var router = express.Router();
var secret_config = require('../secret');
var async = require('async');
var Upload = require('../service/UploadService');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var path = require('path');
var db = require('../db');

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../quasarApp/dist/pwa-ios/', 'index.html'));
});

router.post('/selectTable', function (req, res) {
  //console.log(req.body);
  db.seletTable(req.body,res);
});

router.get('/minimalzeImage', function(req, res, next) {
    res.render('minimalzeImage', { title: '이미지 압축 페이지' });
});

router.post('/uploadResult', urlencodedParser, function(req, res, next) {
  console.log('car_list ' + JSON.stringify(req.body));
  let EstimateData = req.body;
  res.render('uploadResult', { title: 'Express', EstimateData: EstimateData, len:Object.keys(req.body).length});
});
router.post('/upload',  (req, res) => {
  const tasks = [
    (callback) => {
      console.log('start formidable');
      Upload.formidable(req, (err, files, fields) => {

        callback(err, files, fields);
      });
    },
    (files, fields, callback) => {
      console.log('start optimize');
      Upload.optimize(files, (err) => {
        callback(err, files, fields);
      });
    },
    (files, fields, callback) => {
      console.log('start s3');
      console.log('callback');
      Upload.s3(files, 'test/', (err, result) => {
        console.log('result' + JSON.stringify(result));
        callback(err, result)
      });
    }
  ];
  async.waterfall(tasks, (err, result) => {
    if (!err) {
      console.log(result);
      res.json(result);
      res.end();
      // res.render('uploadResult', { title: '업로드 성공', image: result });
      // res.json({success: true, msg: '업로드 성공'})
    } else {
      res.json({success: false, msg: '업로드 실패'})
    }
  });
});


router.post('/minimalzeImage',  (req, res) => {
  const tasks = [
    (callback) => {
      console.log('start formidable');
      Upload.formidable(req, (err, files, fields) => {

        callback(err, files, fields);
      });
    },
    (files, fields, callback) => {
      console.log('start optimize');
      Upload.optimize(files, (err) => {
        callback(err, files, fields);
      });
    },
    (files, fields, callback) => {
      console.log('start s3');
      console.log('callback');
      Upload.s3(files, 'test/', (err, result) => {
        console.log('result' + JSON.stringify(result));
        callback(err, result)
      });
    }
  ];
  async.waterfall(tasks, (err, result) => {
    if (!err) {
      console.log(result);
      // res.json(result);
      res.render('minimalzeResult', { title: '업로드 성공', image: result, len:Object.keys(result).length});
      res.end();
      // res.json({success: true, msg: '업로드 성공'})
    } else {
      res.json({success: false, msg: '업로드 실패'})
    }
  });
});

module.exports = router;