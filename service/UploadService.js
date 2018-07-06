const formidable = require('formidable');
const async = require('async');
const AWS = require('aws-sdk');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');


AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  "region": "ap-northeast-2"
});
/*S3 버킷 설정*/
let params = {
  Bucket: '',
  ACL: 'public-read',
  Body: null
};

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
    params.Key = key + file.name;
    params.Body = require('fs').createReadStream(file.path);
  
    S3.upload(params, (err, result) => {
      callback(err, result);
    });
  }, (err, result) => {
    callback(err, result);
  });
};

module.exports = Upload;