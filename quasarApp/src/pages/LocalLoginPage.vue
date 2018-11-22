<template>
  <div class="local_login_page_wrap">
    <div class="outer">
      <div class="inner">
        <div id="main_container">
          <div class="main_inner_wrap">
              <div class="outer">
                <div class="inner">
                  <div>
                    <form action="/localLogin" enctype="application/x-www-form-urlencoded"  method="post" id="form">
                      <router-link to="/login" class="backBtn">
                        ⇦
                      </router-link>
                      <!--기본정보 입력-->
                      <div class="basicInformation">
                        <b>로그인</b>
                      </div>

                      <!--폰번호-->
                      <div style="text-align: left;">
                        <q-input v-model="carNumber" float-label="차량번호" id="car_number" class="themaInput"  />
                      </div>

                      <!--비밀번호-->
                      <div style="text-align: left; margin-top:10px;">
                        <q-input v-model="password" float-label="비밀번호" id="passwd" class="themaInput"/>
                      </div>
                      <div class="bottom-btn-group" style="width:100%; font-size:0; margin-top:20px;">
                        <q-btn icon="exit_to_app" label="로그인" class="bottomBtn" :loading="loginBtnProgressBl" @click="userCheck()"/>
                        <router-link to="/join" class="bottomBtn">
                          <q-btn icon="person_add" label="회원가입" class="joinBtn" />
                        </router-link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'PageIndex',
    components: {
    },
    data () {
      return {
        carNumber:'',
        password:'',
        loginBtnProgressBl:false
      }
    },
    computed: {
      ...mapGetters({
        userDatabase: 'database/getUserDataBase',
        loginInfo: 'database/getLoginInfo'
      })
    },
    mounted () {
      console.log('aa');
      this.phone = this.$route.query.id;
    },
    methods: {
      userCheck(){

        var vueObj  = this;
        var carNumber = vueObj.carNumber;
        var password = vueObj.password;
        // var users = vueObj.$store.getters["database/getUserDataBase"];
        this.loginBtnProgressBl = true;
        this.$store.dispatch('database/selectTable',{
            tableName:'users',
            fields:'car_number,phone_number,user_name,car_type,car_km,user_level,thumbnail_image,profile_image,login_type',
            whereStr:`where car_number='${carNumber}' and password='${password}'`,
            cb: function(data){
              console.log(data);
              vueObj.loginBtnProgressBl = false;
              if(data == 'no User'){
                alert('차량번호, 비밀번호를 확인해주세요.');
              }else if(data == 'error'){
                alert('error! ');
              }else{
                var loginInfo = data[0];
                console.log(loginInfo);
                vueObj.$store.dispatch('database/setUserInfo',{
                  vueObj: vueObj,
                  carNumber:loginInfo.car_number,
                  phoneNumber:loginInfo.phone_number,
                  userName:loginInfo.user_name,
                  carType:loginInfo.car_type,
                  carKm:loginInfo.car_km,
                  userLevel:loginInfo.user_level,
                  thumbnailImage : loginInfo.thumbnail_image,
                  profileImage : loginInfo.profile_image,
                  loginType:loginInfo.login_type,
                  loginState : true
                });
                vueObj.$router.push({path:'login', query: {}});
                vueObj.$store.dispatch('database/setLocalStorage',vueObj);
              }
            }
          }
        );

        // var haveUser = users.filter(function(currentUser){
        //   return currentUser.info.phoneNumber == phone;
        // });


        // if(haveUser.length == 0){
        //   alert('ID를 확인해주세요.');
        // }else if(haveUser[0].info.password != password){
        //   alert('password가 틀렸습니다.');
        // }else{
        //   vueObj.$store.dispatch('database/setUserInfo',{
        //     vueObj: vueObj,
        //     thumbnailImage : statusObj.user.properties.thumbnail_image,
        //     profileImage : statusObj.user.properties.profile_image,
        //     userName : statusObj.user.properties.nickname,
        //     loginState : true
        //   });
        //   vueObj.$router.push({path:'main', query: {}});
        // }
      }
    },
    beforeUpdate () {

    },
    created () {
    },
  };

</script>

<style lang="scss" scoped>

  .local_login_page_wrap{
    height:100%;
    #main_container{
      max-width: 500px;
      margin: auto;
      margin-bottom: 100px;
    }
    .bottom-btn-group{
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
    .backBtn{
      position: absolute;
      top: 20px;
      left: 20px;
      text-decoration: unset;
    }

    .joinBtn{
      width:100%;
      color:#000000;
    }

    .bottomBtn{
      width:45%;
      border: 1px solid #d5d5d5;
    }
  }
  .local_login_page_wrap .main_inner_wrap .innser{
    height:430px;
  }
  .local_login_page_wrap .main_inner_wrap{
      padding-left: 30px;
      padding-right: 30px;
  }

  .local_login_page_wrap .basicInformation{
      margin-top: 30px;
      width: 100%;
  }

  .local_login_page_wrap .basicInformation b{
      font-size: 150%;
  }

  .local_login_page_wrap .btnChk b{
      height: 25px;
      line-height: 300%;
      width: 25px;
  }

  .local_login_page_wrap .bottomBtn {
      display:inline-block;
  }

  .local_login_page_wrap .red {
      color: red;
  }

  .local_login_page_wrap .black {
      color: black;
  }

  .local_login_page_wrap .termsCheck {
      line-height: 300%;
      font-size:50%;
  }

  .local_login_page_wrap .thema {
      display: inline-block;
      font-size:50%;
  }

  .local_login_page_wrap .themaInput {
      // padding:0px 10px;
      // margin-top: 5px;
      // font-size:40%;
      // line-height: 250%;
      // width: 100%;
      // border: 1px solid #ddd;
      // background: #ffffff !important;
      // box-shadow: none;
  }

  .local_login_page_wrap .car_list{
      display: block;
      font-size: 0.7em;
      line-height: 150%;
      width: 100%;
  }

  .local_login_page_wrap .car_list option{
      font-size: 0.5em;
  }

  .local_login_page_wrap .insertBnt{
      width: 100%;
      font-size:1rem;
      background: white;
      border: 1px solid #ddd;
      display: block;
      text-align: center;
      margin-top:20px;
    }

  .local_login_page_wrap #footer{
      display: none;
  }
</style>
