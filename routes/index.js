var express = require('express');
var router = express.Router();
const async = require('async');
const Upload = require('../service/UploadService');
var bodyParser = require('body-parser');
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('motor_es', { title: 'Express' });
});

router.get('/template', function(req, res, next) {
  res.render('template', { title: 'Express' });
});

/* GET Motor service center page. */
router.get('/motor', function(req, res, next) {
  res.render('motorSC', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/motores', function(req, res, next) {
  res.render('motor_es', { title: 'Express' });
});

router.get('/uploadResult',urlencodedParser, function(req, res, next) {
  console.log('car_list ' + JSON.stringify(req.body));
  res.render('uploadResult', { title: 'Express' });
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
        console.log('result' + result);
        var result2 = {};

        if(result !== undefined){
          result2 = {
            ETag : result.ETag
          };
        }
        callback(err, result2)
      });
    }
  ];
  async.waterfall(tasks, (err, result) => {
    if (!err) {
      console.log(result);
      res.render('uploadResult', { title: '업로드 성공', image: result });
      // res.json({success: true, msg: '업로드 성공'})
    } else {
      res.json({success: false, msg: '업로드 실패'})
    }
  });
});

module.exports = router;
