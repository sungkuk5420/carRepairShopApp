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
                        <!-- <div class="thema"><b>폰번호</b></div> -->
                        <!-- <div class="thema red">(필수)</div> -->
                        <!-- <input class="themaInput" type="text" id="phone" ref="phone" name="username"> -->
                        <q-input v-model="phone" float-label="폰번호" id="phone" class="themaInput" ref="phone" name="username"  />
                      </div>

                      <!--비밀번호-->
                      <div style="text-align: left; margin-top:10px;">
                        <!-- <div class="thema"><b>비밀번호</b></div> -->
                        <!-- <div class="thema red">(필수)</div> -->
                        <!-- <q-input v-model="password" type="password" float-label="Password" /> -->
                        <q-input v-model="password" float-label="비밀번호" id="passwd" class="themaInput" ref="passwd" name="password"  />
                        <!-- :after="[{icon: 'done', condition: this.value.length >= 5, handler () {}}]" -->
                      </div>
                      <div class="bottom-btn-group" style="width:100%; font-size:0; margin-top:20px;">
                        <q-btn icon="exit_to_app" label="로그인" class="bottomBtn" @click="userCheck()"/>
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
        phone:'',
        password:'',
      }
    },
    computed: {
      ...mapGetters({
        userDatabase: 'getUserDataBase'
      })
    },
    mounted () {
      console.log('aa');
      this.phone = this.$route.query.id;
    },
    methods: {
      userCheck(){
        var phone = this.$refs.phone.value;
        var password = this.$refs.passwd.value;
        var users = this.$store.getters["database/getUserDataBase"];

        var haveUser = users.filter(function(currentUser){
          return currentUser.info.phoneNumber == phone;
        });


        if(haveUser.length == 0){
          alert('ID를 확인해주세요.');
        }else if(haveUser[0].info.password != password){
          alert('password가 틀렸습니다.');
        }else{
          this.$router.push({path:'main', query: {}});
        }
      }
    },
    beforeUpdate () {

    },
    created () {
      this.$store.dispatch('database/setUsersRef');

    },
  };

</script>



<style lang="scss" scoped>

  .local_login_page_wrap{
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
    }
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
