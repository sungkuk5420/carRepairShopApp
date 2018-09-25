<template>
  <div class="login_page_wrap">
    <div class="outer">
      <div class="inner">
        <div id="main_container">
          <div class="main_inner_wrap">
            <div class="outer">
                <div class="inner">
                  <div class="text_block top_text_block" >
                    인증된 업체들을 통해 믿을 수 있는 확실한 서비스를 제공받으세요.
                  </div>
                  <div class="btn_sns_list">
                    <a href="http://localhost:4000/auth/login/kakao" class="login-kakao" id="login-kakao" target="_blank"><i>카카오</i>로그인</a>
                    <router-link to="/auth/login/facebook" class="login-facebook" id="login-facebook"><i>페이스북</i>로그인</router-link>
                    <router-link to="/auth/login/naver" class="login-naver" id="naverIdLogin_loginButton"><i>네이버</i>로그인</router-link>
                    <router-link to="/localLogin" class="login-naver" id="native_login">일반로그인</router-link>
                  </div>
                  <div class="text_block">
                    Copyright ⓒ 2018 착한자동차공업사. All rights reserved.<br>
                    <br><br>
                    고객센터 1234-5678 (평일 10:00 ~ 18:00)<br><br>
                    이메일 : sample@naver.com <br><br>
                    (주) 착한자동차공업사|대표 : 홍길동|사업자번호 : 144-81-21245<br><br>
                    경기도 부천시 원미구 신흥로59번길 44-7<br><br>
                    <br><br>
                    사용자 이용약관|개인정보 취급방침|위치정보 서비스 이용약관
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.login_page_wrap{
  position: fixed;
  width: 100%;
  height:100%;
}
.login_page_wrap .naver-login-button{
    height: 40px;
    width: 240px;
    background-image: url("https://static.nid.naver.com/oauth/big_g.PNG");
    background-size: cover;
    background-position-y: -5px;
    border: none;
    background-repeat: no-repeat;
    background-color: #1ec802;
    border-radius: 5px;
    display: table-cell;
  }

  .login_page_wrap .fb-login-button span{
    margin: auto;
    right: 0;
    left: 0;
    display: block !important;
  }

  .login_page_wrap .fb-login-button-div{
    display: table;
    position: relative;
    width:240px;
    height: 40px;
    background: #4267b2;
    border-radius: 5px;
  }

  .login_page_wrap .fb-login-button{
    max-width: 240px;
    overflow: hidden;
    display: table-cell !important;
    border-radius: 5px;
    margin-right: 285px;
  }

  .login_page_wrap .fb-layer{
    height: 40px;
    position: absolute;
    background: #4267b2;
    width: 0px;
    z-index: 1;
    top: 0;
    right: 0;
    border-radius: 5px;
  }

  .login_page_wrap .kakao-login-button{
    height: 40px;
    width: 240px;
    background-image: url("http://k.kakaocdn.net/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg");
    background-size: cover;
    background-position: -5px 1px;
    border: none;
    background-repeat: no-repeat;
    background-color: #ffeb00;
    border-radius: 5px;
    display: table-cell;
  }

  .login_page_wrap a {
    margin: 0;
    padding: 0;
    color: #454545;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    background: transparent;
  }
  .login_page_wrap .btn_sns_list{
    width: auto;
    margin: auto;
    display: inline-block;
    width: 65%;
  }
  .login_page_wrap .btn_sns_list i {
    display: inline-block;
    position: relative;
    width: 88px;
    height: 15px;
    background: url(/images/sub/member/sns_mbtn_set.png) no-repeat 0 0;
    background-size: 80px 64px;
    font-size: 0;
    text-indent: -9999em;
    vertical-align: middle;
  }
  .login_page_wrap .btn_sns_list > a {
    display: block;
    padding: 0.9rem 0rem 0.6rem 0rem;
    line-height: 200%;
    border: 1px solid #e0e0e0;
    font-size: 50%;
    color: #454545;
    font-weight: 600;
    text-align: center;
    width: 100%;
    margin: 0 0 5px 5px;
  }
  .login_page_wrap .btn_sns_list i {
    height: 12px;
    background: url("https://ssl.tourbaksa.com/images/sub/member/sns_pcbtn_set.png") no-repeat 0 0;
    background-size: inherit;
    vertical-align: top;
    top: 1px;
  }
  .login_page_wrap .login-facebook i {
    width: 86px;
    height: 15px;
    background-position: 0 -29px;
    top:4px;
  }
  .login_page_wrap .login-naver i {
    width: 76px;
    background-position: 0 0;
    top: 7px;
  }
  .login_page_wrap .login-kakao i {
    width: 66px;
    height: 17px;
    background-position: 0 -12px;
  }
  .login_page_wrap .hide{
    display:none;
  }
  .login_page_wrap .outer {
    display: table;
    width: 100%;
    height: 100%;
  }
  .login_page_wrap .inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }



  .login_page_wrap .login_page_wrap {
    width: 70%;
    height: 70%;
    margin: 40px auto;
  }

  .login_page_wrap .text_block{
    padding:20px 0px;
    font-size: 35%;
  }

  .login_page_wrap .top_text_block{
    padding:20px 0px;
    font-size: 80%;
  }
  .login_page_wrap #footer{
    display:none;
  }
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  mounted () {
  },
  methods: {
    kakaoLogin(){
      this.$store.dispatch('database/kakaoLoginAjax');
    }
  },
  beforeUpdate () {
  },
  created () {
  },
};

</script>
