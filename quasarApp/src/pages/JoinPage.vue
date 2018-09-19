<template>
  <div class="join_page_wrap">
    <div id="main_container">
      <div class="main_inner_wrap">
        <router-link to="/localLogin" class="backBtn">
          ⇦
        </router-link>

        <div class="outer">
          <div class="inner">
            <!--기본정보 입력-->
            <div class="basicInformation">
              <b>기본정보 입력</b>
            </div>

            <!--폰번호-->
            <div>
              <div class="thema"><b>폰번호</b></div>
              <div class="thema red">(필수)</div>
              <input class="themaInput" type="text" id="phone" ref="phone">
            </div>

            <!--비밀번호-->
            <div>
              <div class="thema"><b>비밀번호</b></div>
              <div class="thema red">(필수)</div>
              <input class="themaInput" type="password" id="passwd" ref="passwd">
            </div>

            <!--차종-->
            <div>
              <div class="thema"><b>차종</b></div>
              <div class="thema red">(필수)</div>
              <select class="themaInput car_list" id="car_list" name="car_list">
                <option value="all_new_k3" selected>all new k3</option>
                <option value="BMW">BMW</option>
                <option value="audi">audi</option>
            </select>
            </div>

            <!--연식-->
            <div>
              <div class="thema"><b>연식</b></div>
              <div class="thema red">(필수)</div>
              <input class="themaInput" type="text" id="carYear">
            </div>

            <!--키로수-->
            <div>
              <div class="thema"><b>키로수</b></div>
              <div class="thema red">(필수)</div>
              <input class="themaInput" type="text" id="carKm">
            </div>

            <!--등급-->
            <div>
              <div class="thema"><b>등급</b></div>
              <div class="thema black">(선택)</div>
              <input class="themaInput" type="text" id="carRate">
            </div>

            <!--동의 체크박스-->
            <div class="termsCheck">
              <b>개인정보</b> 및 <b>서비스 이용약관</b> 동의합니다.
              <input class="btnChk" type="checkbox" id="btnChk">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--가입버튼-->
    <div class="insertBtn" id="insertBtn" @click="userJoin();">
      <a>가입하기</a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import router from '../router/routes.js'
  export default {
    name: 'PageIndex',
    components: {
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        userDatabase: 'getUserDataBase'
      })
    },
    mounted () {
    },
    methods: {
      userJoin(){
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('passwd').value;
        var carType = document.getElementById('car_list').value;
        var carYear = document.getElementById('carYear').value;
        var carKm = document.getElementById('carKm').value;
        var carRate = document.getElementById('carRate').value;
        var users = this.$store.getters["database/getUserDataBase"];
        var haveUser = users.filter(function(currentUser){
          return currentUser.info.phoneNumber == phone;
        });
        if(haveUser.length != 0){
          alert('이미 가입되어 있는 ID입니다.');
        }else{
          if(document.getElementById('btnChk').checked == true) {
            if(phone !== '' && passwd !== '' && carType !== '' && carYear !== '' && carKm !== '') {
              this.$store.dispatch('database/insertUser',{phone,password,carType,carYear,carKm,carRate});
              alert('가입 되었습니다!');
              this.$router.push({path:'localLogin', query: { id: phone }});
            }
            else if(phone == ''){
              alert('폰번호를 입력 해주세요.');
            }
            else if(passwd == ''){
              alert('비밀번호를 입력 해주세요.');
            }
            else if(carType == ''){
              alert('차종을 입력 해주세요.');
            }
            else if(carYear == ''){
              alert('연식을 입력 해주세요.');
            }
            else if(carKm == ''){
              alert('키로수를 입력 해주세요.');
            }
          }
          else {
            alert('이용약관에 동의해주세요');
          }
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
.join_page_wrap{
  position: fixed;
  width: 100%;
  height:100%;
  #main_container,
  .main_inner_wrap{
    height:100%;
  }
  .backBtn{
    position: absolute;
    top: 20px;
    left: 20px;
    text-decoration: unset;
  }
  .inner{
    text-align: left;
  }
}
.join_page_wrap .main_inner_wrap{
    padding-left: 30px;
    padding-right: 30px;
}

.join_page_wrap .basicInformation{
    margin-top: -50px;
    width: 100%;
}

.join_page_wrap .basicInformation b{
    font-size: 150%;
}

.join_page_wrap .btnChk b{
    height: 25px;
    line-height: 300%;
    width: 25px;
}

.join_page_wrap .insertBtn {
    background-color:gray;
    color:black;
    font-size: 40%;
    line-height: 300%;
    text-align: center;
    width: 100%;
}

.join_page_wrap .red {
    color: red;
}

.join_page_wrap .black {
    color: black;
}

.join_page_wrap .termsCheck {
    line-height: 300%;
    font-size:50%;
}

.join_page_wrap .thema {
    display: inline-block;
    font-size:50%;
}

.join_page_wrap .themaInput {
    margin-top: 5px;
    font-size:40%;
    line-height: 150%;
    width: 100%;
}

.join_page_wrap .car_list{
    display: block;
    font-size: 0.7em;
    line-height: 150%;
    width: 100%;
}

.join_page_wrap .car_list option{
    font-size: 0.5em;
}

.join_page_wrap .insertBtn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size:1rem;
    background: white;

    border: 1px solid #ddd;
    display: inline-block;
    text-align: center;
  }

.join_page_wrap #footer{
    display: none;
 }
</style>
