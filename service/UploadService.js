const formidable = require('formidable');
const async = require('async');
const AWS = require('aws-sdk');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
var secret_config = require('../secret');

let params = {
  Bucket: secret_config.federation.s3.Bucket,
  Key: secret_config.federation.s3.Key,
  ACL: 'public-read',
  Body: null
};
  
  
AWS.config.update({
  accessKeyId: secret_config.federation.s3.accessKeyId,
  secretAccessKey: secret_config.federation.s3.secretAccessKey,
  "region": "ap-northeast-2"
});

const S3 = new S3Instance();
const ROOT_PATH = process.cwd();
const Upload = {};

function S3Instance() {
  'use strict';
  let instance;
  S3Instance = function () {
    return instance;
  };
  instance = new AWS.S3();
  return instance
}


Upload.formidable = (req, callback) => {
  let _fields;
  
  function FormidableInstance() {
    'use strict';
    let instance;
    FormidableInstance = function () {
      return instance;
    };
    
    instance = new formidable.IncomingForm({
      encoding: 'utf-8',
      multiples: true,
      keepExtensions: true, //확장자 제거
      uploadDir: `${ROOT_PATH}/service`
    });
    
    return instance
  }
  
  const form = new FormidableInstance();
  
  form.parse(req, function (err, fields) {
    _fields = fields;
  });
  
  form.on('error', function (err) {
    callback(err, null, null);
  });
  
  form.on('end', function () {
    callback(null, this.openedFiles, _fields);
  });
};

Upload.optimize = (files, callback) => {
  async.each(files, (file, cb) => {
    imagemin([file.path], `${ROOT_PATH}/service/`, {
      plugins: [
        imageminPngquant({quality: '0-80', verbose: false, floyd: 1})
      ]
    }).then(() => {
      cb();
    })
  }, (err) => {
    callback(err)
  });
};

Upload.s3 = (files, key, callback) => {
  async.each(files, (file, cb) => {
    console.log(file.size);
    params.Key = key + file.name;
    params.originalSize = file.size;
    params.fileName = file.name;
    params.Body = require('fs').createReadStream(file.path);
  
    S3.upload(params, (err, result) => {
      console.log('S3.upload result : ',result);
      result.originalSize = params.originalSize;
      result.fileName = params.fileName;
      callback(err, result);
    });
  }, (err, result) => {
    callback(err, result);
  });
};

module.exports = Upload;