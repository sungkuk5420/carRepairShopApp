<template>
  <div class="login_page_wrap page_wrap">
    <div id="main_container" class="column no-wrap">
      <header-comp v-bind:title="title" v-bind:header-back-btn="headerBackBtn"></header-comp>
      <div class="main_inner_wrap">
        <div class="no-login-div " v-if="loginInfo.loginState == false">
          <div class="outer">
            <div class="inner">
              <div class="text_block top_text_block" >
                인증된 업체들을 통해 믿을 수 있는 확실한 서비스를 제공받으세요.
              </div>
              <div class="btn_sns_list">
                <div class="hide-area">
                  <KakaoLogin
                  api-key="38e6c13fd2fe123d3b39f44ea70926f2"
                  image="kakao_login_btn_large"
                  :on-success=onSuccess
                  :on-failure=onFailure
                  />
                </div>
                <a href="#" id="login-kakao" class="login-kakao" onclick="$('#kakao-login-btn').click();"><i>카카오</i></a>
                <a href="#" class="login-facebook" id="login-facebook" onclick="alert('개발중입니다.');"><i>페이스북</i></a>
                <a href="#" class="login-naver" id="naverIdLogin_loginButton" onclick="alert('개발중입니다.');"><i>네이버</i></a>
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
        <div class="login-div"  v-if="loginInfo.loginState == true">
          <div class="row justify-center">
            <div class="profile-img-div ">
              <img v-bind:src="loginInfo.thumbnailImage" alt="profile-image" class="shadow-1 profile-img">
            </div>
          </div>
          <div class="row user-name-div">
            <div class="outer">
              <div class="inner">
                <div class="user-name">{{loginInfo.userName}}</div>
              </div>
            </div>
          </div>

          <div class="margin-div"></div>
          <div class="row menu-div">
            <span class="label">상태메세지</span>
            <span class="value">상태메세지를 입력하세요</span>
          </div>
          <div class="row menu-div">
            <span class="label">프로필뱃지 / 음악</span>
          </div>
          <div class="row menu-div last-div">
            <span class="label">프로필 콘</span>
          </div>
          <div class="margin-div"></div>
          <div class="row menu-div">
            <span class="label">전화번호</span>
            <span class="value">+81 70-4805-3533</span>
          </div>
          <div class="row menu-div">
            <span class="label">이메일</span>
            <span class="value">sungkuk@gmail.com</span>
          </div>
          <div class="row menu-div last-div">
            <span class="label">계정관리</span>
          </div>
          <div class="margin-div"></div>
          <div class="row menu-div">
            <span class="label">자동차</span>
            <span class="value">제네시스</span>
          </div>
          <div class="row menu-div">
            <span class="label">회원등급</span>
            <span class="value">일반</span>
          </div>
          <div class="row menu-div last-div" @click="kakaoLogout();">
            <span class="label">로그아웃</span>
          </div>
          <div class="margin-div"></div>
          <div class="margin-div"></div>
        </div>
      </div>
      <footer-comp></footer-comp>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import footerComp from '../components/footerComp.vue'
import headerComp from '../components/headerComp.vue'
import KakaoLogin from 'vue-kakao-login'

export default {
  name: 'PageIndex',
  components: {
    KakaoLogin,
    footerComp,
    headerComp
  },
  data () {
    return {
      title : '로그인',
      headerBackBtn : false
    }
  },
  computed: {
    ...mapGetters({
        loginInfo: 'database/getLoginInfo'
    })
  },
  mounted () {
  },
  methods: {
    kakaoLogout(){
      this.$store.dispatch('database/logout');
    },
    onSuccess(data){
      var vueObj = this;
      console.log(data)
      console.log("success")
      Kakao.Auth.getStatusInfo((statusObj)=>{
        console.log(statusObj);
        vueObj.$store.dispatch('database/setUsersInfo',{
          vueObj: vueObj,
          thumbnailImage : statusObj.user.properties.thumbnail_image,
          profileImage : statusObj.user.properties.profile_image,
          userName : statusObj.user.properties.nickname,
          loginState : true
        });
      });
    },
    onFailure(data){
      console.log(data)
      console.log("failure")
    }
  },
  beforeUpdate () {
  },
  created () {
  },
};

</script>

<style lang="scss" scoped>
.login_page_wrap{
  #kakao-login-btn{
    display:none;
  }
  .login-kakao{
    z-index:-1;
  }
  .no-login-div{
    height: 100%;
  }

  .login-div{
    background-color: #dfdfdf5e;
    .profile-img-div{
      width:20%;
      max-width: 120px;
      margin-top: 10px;
      .profile-img{
        border-radius: 50%;
        padding: 4px;
        width: 100%;
      }
    }
    .user-name-div{
      .user-name{
        font-size: 1rem;
        font-weight: bold;
      }
    }

    .menu-div{
      width: 100%;
      border-top: 1px solid #ddd;
      padding: 20px;
      justify-content: space-between;
      align-items: center;
      background: white;
      .label{
        font-size:0.7rem;
      }
      .value{
        font-size:0.5rem;
      }

      &.last-div{
        border-bottom: 1px solid #ddd;
      }
    }
    .margin-div{
      height: 10px;
    }
  }

  .btn_sns_list{
    // .hide-area{
    //   margin-left: 5px;
    //   overflow: hidden;
    //   position: absolute;
    //   width: 100%;
    //   opacity: 0.0001;
    //   cursor: pointer;
    //   iframe {
    //     width:100% !important;
    //   }
    // }
  }
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
    max-width: 300px;
    position: relative;
  }
  .login_page_wrap .btn_sns_list i {
    display: inline-block;
    position: relative;
    width: 88px;
    background: url(/images/sub/member/sns_mbtn_set.png) no-repeat 0 0;
    background-size: 80px 64px;
    font-size: 0;
    text-indent: -9999em;
    vertical-align: middle;
  }
  .login_page_wrap .btn_sns_list > a {
    display: flex;
    padding: 0.6rem 0rem;
    line-height: 200%;
    border: 1px solid #e0e0e0;
    font-size: 0.5rem;
    color: #454545;
    font-weight: 600;
    text-align: center;
    width: 100%;
    margin: 0 0 5px 5px;
    justify-content: center;
    align-items: center;
    line-height: 17px;
  }
  .login_page_wrap .btn_sns_list i {
    height: 12px;
    margin: 2.5px 0;
    background: url("https://ssl.tourbaksa.com/images/sub/member/sns_pcbtn_set.png") no-repeat 0 0;
    background-size: inherit;
    vertical-align: top;
  }
  .login_page_wrap .login-facebook i {
    width: 86px;
    height: 15px;
    margin: 1px 0;
    background-position: 0 -29px;
  }
  .login_page_wrap .login-naver i {
    width: 76px;
    background-position: 0 0;
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
    font-size: 0.4rem;
  }

  .login_page_wrap .top_text_block{
    padding:20px 0px;
    font-size: 0.5rem;
  }
  .login_page_wrap #footer{
    /* display:none; */
  }
</style>
