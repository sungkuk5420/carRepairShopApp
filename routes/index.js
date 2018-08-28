// var express = require('express');
// var router = express.Router();
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
// var bcrypt = require('bcrypt');
// var secret_config = require('../secret');
// var NaverStrategy = require('passport-naver').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var KakaoStrategy = require('passport-kakao').Strategy;
// const async = require('async');
// const Upload = require('../service/UploadService');
// var bodyParser = require('body-parser'); 
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// /*로그인 성공시 사용자 정보를 Session에 저장한다*/
// passport.serializeUser(function (user, done) {
//   done(null, user)
// });

// /*인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.*/
// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// /*로그인 유저 판단 로직*/
// var isAuthenticated = function (req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/login');
// };

// passport.use(new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password',
//   passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
// }, function (req, username, password, done) {
//   return done(null, {
//     user_id: username,
//     nickname: password
//   });
// }));

// // kakao로 로그인
// passport.use(new KakaoStrategy({
//     clientID: secret_config.federation.kakao.client_id,
//     callbackURL: secret_config.federation.kakao.callback_url
//   },
//   function (accessToken, refreshToken, profile, done) {
//     var _profile = profile._json;
//     console.log('Kakao login info');
//     console.info(_profile);
//     // todo 유저 정보와 done을 공통 함수에 던지고 해당 함수에서 공통으로 회원가입 절차를 진행할 수 있도록 한다.

//     loginByThirdparty({
//       'auth_type': 'kakao',
//       'auth_id': _profile.id,
//       'auth_name': _profile.properties.nickname,
//       'auth_email': _profile.id,
//       'profile_image': _profile.properties.profile_image,
//       'thumbnail_image': _profile.properties.thumbnail_image
//     }, done);
//   }
// ));

// // 페이스북으로 로그인 처리
// passport.use(new FacebookStrategy({
//   clientID: secret_config.federation.facebook.client_id,
//   clientSecret: secret_config.federation.facebook.secret_id,
//   callbackURL: secret_config.federation.facebook.callback_url,
//   profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone',
//     'updated_time', 'verified', 'displayName']
// }, function (accessToken, refreshToken, profile, done) {
//   const _profile = profile._json;
  
//   console.log('Facebook login info');
//   console.info(_profile);
  
//   loginByThirdparty({
//     'auth_type': 'facebook',
//     'auth_id': _profile.id,
//     'auth_name': _profile.name,
//     'auth_email': _profile.id
//   }, done);
// }
// ));

// // naver login
// passport.use(new NaverStrategy({
//   clientID: secret_config.federation.naver.client_id,
//   clientSecret: secret_config.federation.naver.secret_id,
//   callbackURL: secret_config.federation.naver.callback_url // ?? 이것이 어떤 역할을 하는가?
// },
// function (accessToken, refreshToken, profile, done) {
//   const _profile = profile._json;
  
//   console.log('Naver login info');
//   console.info(_profile);
  
//   loginByThirdparty({
//     'auth_type': 'naver',
//     'auth_id': _profile.id,
//     'auth_name': _profile.nickname,
//     'auth_email': _profile.email
//   }, done);
  
// }
// ));

// /* GET home page. */
// router.get('/',isAuthenticated, function(req, res, next) {
//   if (req.user !== undefined) {
//     res.redirect('/main')
//   } else {
//     res.render('login', {
//       title: 'login'
//     })
//   }
// });

// router.get('/insertUser', function(req, res, next) {
//   res.render('insertUser', { title: 'Express' });
// });

// router.get('/event', function(req, res, next) {
//   res.render('event', { title: 'Express' });
// });

// /* GET Motor service center page. */
// router.get('/motor', function(req, res, next) {
//   res.render('motorSC', { title: 'Express' });
// });
// router.get('/login', function(req, res, next) {
//   if (req.user !== undefined) {
//     res.redirect('/main')
//   } else {
//     res.render('login', {
//       title: 'login'
//     })
//   }
// });

// router.get('/main', function(req, res, next) {
//   res.render('main', { title: 'Express' });
// });

// router.get('/motores', function(req, res, next) {
//   res.render('motor_es', { title: 'Express' });
// });

// router.get('/localLogin', function(req, res, next) {
//   res.render('localLogin', { title: 'Express' });
// });

// // kakao 로그인
// router.get('/auth/login/kakao',
//   passport.authenticate('kakao')
// );
// // kakao 로그인 연동 콜백
// router.get('/auth/login/kakao/callback',
//   passport.authenticate('kakao', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

// // facebook 로그인
// router.get('/auth/login/facebook',
//   passport.authenticate('facebook')
// );
// // facebook 로그인 연동 콜백
// router.get('/auth/login/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

// // naver 로그인
// router.get('/auth/login/naver',
//   passport.authenticate('naver')
// );
// // naver 로그인 연동 콜백
// router.get('/auth/login/naver/callback',
//   passport.authenticate('naver', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// );

// router.post('/localLogin', passport.authenticate('local', {
//   failureRedirect: '/login', failureFlash: true}), // 인증 실패 시 401 리턴, {} -> 인증 스트레티지
//   function (req, res) {
//     res.redirect('/main');
//   }
// );

// router.get('/minimalzeImage', function(req, res, next) {
//     res.render('minimalzeImage', { title: '이미지 압축 페이지' });
// });


// /**
//  * 1. 중복성 검사
//  * 2. 신규 유저
//  *  2.1 신규 유저 가입 시키기
//  * 3. 올드유저
//  *  3.1 바로 로그인 처리
//  * */

// function loginByThirdparty(info, done) {
//   console.log('process : ' + info.auth_type);
//   console.log('auth_id : ' + info.auth_id);
//   console.log('auth_name : ' + info.auth_name);
//   console.log('auth_email : ' + info.auth_email);
//   console.log('profile_image : ' + info.profile_image);
//   console.log('thumbnail_image : ' + info.thumbnail_image);
  
//   // TODO 신규 유저 가입 시켜야됨
//   console.log("신규 유저 가입 시켜라!");
//   done(null, {
//     'user_id': info.auth_id,
//     'nickname': info.auth_name
//   });
// }

// router.post('/uploadResult', urlencodedParser, function(req, res, next) {
//   console.log('car_list ' + JSON.stringify(req.body));
//   let EstimateData = req.body;
//   res.render('uploadResult', { title: 'Express', EstimateData: EstimateData, len:Object.keys(req.body).length});
//     // res.json(EstimateData);
//   // res.end();
// });
// router.post('/event_detail', urlencodedParser, function(req, res, next) {
//   console.log('event_detail ' + JSON.stringify(req.body));
//   let eventData = req.body;
//   console.log(eventData);
//   res.render('event_detail', { title: 'Express', eventData: eventData, len:Object.keys(req.body).length});
//     // res.json(EstimateData);
//   // res.end();
// });
// router.post('/upload',  (req, res) => {
//   const tasks = [
//     (callback) => {
//       console.log('start formidable');
//       Upload.formidable(req, (err, files, fields) => {

//         callback(err, files, fields);
//       });
//     },
//     (files, fields, callback) => {
//       console.log('start optimize');
//       Upload.optimize(files, (err) => {
//         callback(err, files, fields);
//       });
//     },
//     (files, fields, callback) => {
//       console.log('start s3');
//       console.log('callback');
//       Upload.s3(files, 'test/', (err, result) => {
//         console.log('result' + JSON.stringify(result));
//         callback(err, result)
//       });
//     }
//   ];
//   async.waterfall(tasks, (err, result) => {
//     if (!err) {
//       console.log(result);
//       res.json(result);
//       res.end();
//       // res.render('uploadResult', { title: '업로드 성공', image: result });
//       // res.json({success: true, msg: '업로드 성공'})
//     } else {
//       res.json({success: false, msg: '업로드 실패'})
//     }
//   });
// });


// router.post('/minimalzeImage',  (req, res) => {
//   const tasks = [
//     (callback) => {
//       console.log('start formidable');
//       Upload.formidable(req, (err, files, fields) => {

//         callback(err, files, fields);
//       });
//     },
//     (files, fields, callback) => {
//       console.log('start optimize');
//       Upload.optimize(files, (err) => {
//         callback(err, files, fields);
//       });
//     },
//     (files, fields, callback) => {
//       console.log('start s3');
//       console.log('callback');
//       Upload.s3(files, 'test/', (err, result) => {
//         console.log('result' + JSON.stringify(result));
//         callback(err, result)
//       });
//     }
//   ];
//   async.waterfall(tasks, (err, result) => {
//     if (!err) {
//       console.log(result);
//       // res.json(result);
//       res.render('minimalzeResult', { title: '업로드 성공', image: result, len:Object.keys(result).length});
//       res.end();
//       // res.json({success: true, msg: '업로드 성공'})
//     } else {
//       res.json({success: false, msg: '업로드 실패'})
//     }
//   });
// });

// module.exports = router;

var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(path.join(__dirname, '../pwaApp/dist/pwa-ios', 'index.html'));
  res.sendFile(path.join(__dirname, '../pwaApp/dist/pwa-ios', 'index.html'));
});

module.exports = router;