var express = require('express');
var router = express.Router();
const async = require('async');
const Upload = require('../service/UploadService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
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

router.get('/main', function(req, res, next) {
  res.render('main_title', { title: 'Express' });
});

router.get('/estResult', function(req, res, next) {
  res.render('estimateResult', { title: 'Express' });
});

router.post('/upload', (req, res) => {
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
        callback(err, result)
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
