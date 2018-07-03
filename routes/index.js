var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');
var secret_config = require('../secret');

var NaverStrategy = require('passport-naver').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var KakaoStrategy = require('passport-kakao').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/insertUser', function(req, res, next) {
  res.render('insertUser', { title: 'Express' });
});

/* GET Motor service center page. */
router.get('/motor', function(req, res, next) {
  res.render('motorSC', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), // 인증 실패 시 401 리턴, {} -> 인증 스트레티지
  function (req, res) {
    res.redirect('/motor');
  });




// kakao로 로그인
passport.use(new KakaoStrategy({
    clientID: secret_config.federation.kakao.client_id,
    callbackURL: secret_config.federation.kakao.callback_url
  },
  function (accessToken, refreshToken, profile, done) {
    var _profile = profile._json;
    console.log('Kakao login info');
    console.info(_profile);
    // todo 유저 정보와 done을 공통 함수에 던지고 해당 함수에서 공통으로 회원가입 절차를 진행할 수 있도록 한다.

    loginByThirdparty({
      'auth_type': 'kakao',
      'auth_id': _profile.id,
      'auth_name': _profile.properties.nickname,
      'auth_email': _profile.id
    }, done);
  }
));

// kakao 로그인
router.get('/auth/login/kakao',
  passport.authenticate('kakao')
);
// kakao 로그인 연동 콜백
router.get('/auth/login/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/motor',
    failureRedirect: '/login'
  })
);


/**
 * 1. 중복성 검사
 * 2. 신규 유저
 *  2.1 신규 유저 가입 시키기
 * 3. 올드유저
 *  3.1 바로 로그인 처리
 * */

function loginByThirdparty(info, done) {
  console.log('process : ' + info.auth_type);
  
  
  // TODO 신규 유저 가입 시켜야됨
  console.log("신규 유저 가입 시켜라!");
}

module.exports = router;
