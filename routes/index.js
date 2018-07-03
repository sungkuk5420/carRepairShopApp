var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');
var secret_config = require('../secret');

var NaverStrategy = require('passport-naver').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var KakaoStrategy = require('passport-kakao').Strategy;
/**
 * */

/*로그인 성공시 사용자 정보를 Session에 저장한다*/
passport.serializeUser(function (user, done) {
  done(null, user)
});

/*인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.*/
passport.deserializeUser(function (user, done) {
  done(null, user);
});

/*로그인 유저 판단 로직*/
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, username, password, done) {
  connection.query('select *from `user` where `user_id` = ?', username, function (err, result) {
    if (err) {
      console.log('err :' + err);
      return done(false, null);
    } else {
      if (result.length === 0) {
        console.log('해당 유저가 없습니다');
        return done(false, null);
      } else {
        if (!bcrypt.compareSync(password, result[0].password)) {
          console.log('패스워드가 일치하지 않습니다');
          return done(false, null);
        } else {
          console.log('로그인 성공');
          return done(null, {
            user_id: result[0].user_id,
            nickname: result[0].nickname
          });
        }
      }
    }
  })
}));

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
      'auth_email': _profile.id,
      'profile_image': _profile.properties.profile_image,
      'thumbnail_image': _profile.properties.thumbnail_image
    }, done);
  }
));

/* GET home page. */
router.get('/',isAuthenticated, function(req, res, next) {
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
  if (req.user !== undefined) {
    res.redirect('/motor')
  } else {
    res.render('login', {
      title: 'login'
    })
  }
});

router.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), // 인증 실패 시 401 리턴, {} -> 인증 스트레티지
  function (req, res) {
    res.redirect('/motor');
  });

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
  console.log('auth_id : ' + info.auth_id);
  console.log('auth_name : ' + info.auth_name);
  console.log('auth_email : ' + info.auth_email);
  console.log('profile_image : ' + info.profile_image);
  console.log('thumbnail_image : ' + info.thumbnail_image);
  
  // TODO 신규 유저 가입 시켜야됨
  console.log("신규 유저 가입 시켜라!");
  done(null, {
    'user_id': info.auth_id,
    'nickname': info.auth_name
  });
}



module.exports = router;
