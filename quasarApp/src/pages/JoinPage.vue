<template>
  <div class="join_page_wrap">
    <div id="main_container">
      <div class="main_inner_wrap">
        <div class="outer">
          <div class="inner">
            <router-link to="/localLogin" class="backBtn">⇦</router-link>

            <!--기본정보 입력-->
            <div class="basicInformation">
              <b>회원가입</b>
            </div>

            <!--차량번호-->
            <div>
              <q-input v-model="carNumber" float-label="차량번호(Id)" class="themaInput"/>
            </div>

            <!--비밀번호-->
            <div>
              <q-input v-model="password" float-label="비밀번호" class="themaInput"/>
            </div>

            <!--폰번호-->
            <div>
              <q-input v-model="phone" float-label="폰번호 (선택)" class="themaInput"/>
            </div>

            <!--폰번호-->
            <div>
              <q-input v-model="nickName" float-label="성함 (선택)" class="themaInput"/>
            </div>

            <!--차종-->
            <div>
              <q-select v-model="selectedOption" float-label="차종" radio :options="selectOptions"/>
            </div>

            <!--키로수-->
            <div>
              <q-input v-model="carKm" float-label="주행거리 (선택)" class="themaInput"/>
            </div>

            <!--등급-->
            <!-- <div>
              <div class="thema"><b>등급</b></div>
              <div class="thema black">(선택)</div>
              <input class="themaInput" type="text" id="carRate">
            </div>-->
            <!--동의 체크박스-->
            <div class="termsCheck">
              <q-checkbox id="btnChk" v-model="checked" label="개인정보 및 서비스 이용약관에 동의합니다."/>
            </div>

            <div class="bottom-btn-group" style="width:100%; font-size:0; margin-top:20px;">
              <q-btn
                icon="exit_to_app"
                label="회원가입"
                class="bottomBtn insertBtn"
                id="insertBtn"
                @click="userJoin();"
                :loading="loginBtnProgressBl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--가입버튼-->
    <div>
      <a>가입하기</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router/routes.js";
export default {
  name: "PageIndex",
  components: {},
  data() {
    return {
      carNumber: "",
      password: "",
      phone: "",
      nickName: "",
      selectedOption: "",
      selectOptions: [
        {
          label: "all new k3",
          value: "all new k3"
        },
        {
          label: "BMW",
          value: "BMW"
        },
        {
          label: "audi",
          value: "audi"
        }
      ],
      carKm: "",
      checked: false,
      loginBtnProgressBl: false
    };
  },
  computed: {
    ...mapGetters({
      userDatabase: "getUserDataBase"
    })
  },
  mounted() {},
  methods: {
    userJoin() {
      var vueObj = this;
      var id = null;
      var car_number = vueObj.carNumber;
      var password = vueObj.password;
      var phone_number = vueObj.phone;
      var user_name = vueObj.nickName;
      var car_type = vueObj.selectedOption;
      var car_km = vueObj.carKm;
      var thumbnail_image = null;
      var profile_image = null;
      var user_level = "public";
      var login_type = "local";
      var haveUser = [];
      this.loginBtnProgressBl = true;
      if (vueObj.checked == true) {
        console.log("aa");
        if (car_number !== "" && password !== "") {
          this.$store.dispatch("database/selectTable", {
            tableName: "users",
            fields: "user_name",
            whereStr: `where car_number='${car_number}'`,
            cb: data => {
              if (data == "no User") {
                insertUser();
              } else if (data == "error") {
                alert("error! ");
              } else {
                haveUser.push(data);
                this.loginBtnProgressBl = false;
                alert("이미 가입되어 있는 ID입니다.");
              }
            }
          });
        } else if (car_number == "") {
          alert("차량번호를 입력 해주세요.");
        } else if (password == "") {
          alert("비밀번호를 입력 해주세요.");
        }
      } else {
        alert("이용약관에 동의해주세요");
      }
      this.loginBtnProgressBl = false;

      var insertUser = () => {
        vueObj.$store.dispatch("database/insertUser", {
          id,
          car_number,
          password,
          phone_number,
          user_name,
          car_type,
          car_km,
          thumbnail_image,
          profile_image,
          user_level,
          login_type,
          cb: data => {
            this.loginBtnProgressBl = false;
            if (data == "success") {
              alert("가입 되었습니다!");
              vueObj.$router.push({
                path: "localLogin",
                query: { id: car_number }
              });
            } else {
              alert("error");
            }
          }
        });
      };
    }
  },
  beforeUpdate() {},
  created() {}
};
</script>

<style lang="scss" scoped>
.join_page_wrap {
  height: 100%;
  #main_container {
    max-width: 500px;
    margin: auto;
    margin-bottom: 50px;
  }
  .bottom-btn-group {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .backBtn {
    position: absolute;
    top: 20px;
    left: 20px;
    text-decoration: unset;
  }

  .joinBtn {
    width: 100%;
    color: #000000;
  }

  .bottomBtn {
    width: 100%;
    border: 1px solid #d5d5d5;
  }
}

.local_login_page_wrap .main_inner_wrap .innser {
  height: 430px;
}

.join_page_wrap .main_inner_wrap {
  padding-left: 30px;
  padding-right: 30px;
}

.join_page_wrap .basicInformation {
  margin-top: 30px;
  width: 100%;
}

.join_page_wrap .basicInformation b {
  font-size: 150%;
}

.join_page_wrap .btnChk b {
  height: 25px;
  line-height: 300%;
  width: 25px;
}

.join_page_wrap .bottomBtn {
  display: inline-block;
}

.join_page_wrap .red {
  color: red;
}

.join_page_wrap .black {
  color: black;
}

.join_page_wrap .termsCheck {
  line-height: 300%;
  font-size: 50%;
  text-align: left;
  padding-top: 10px;
}

.join_page_wrap .thema {
  display: inline-block;
  font-size: 50%;
}

.join_page_wrap .themaInput {
  // padding:0px 10px;
  // margin-top: 5px;
  // font-size:40%;
  // line-height: 250%;
  // width: 100%;
  // border: 1px solid #ddd;
  // background: #ffffff !important;
  // box-shadow: none;
}

.join_page_wrap .car_list {
  display: block;
  font-size: 0.7em;
  line-height: 150%;
  width: 100%;
}

.join_page_wrap .car_list option {
  font-size: 0.5em;
}

.join_page_wrap .insertBnt {
  width: 100%;
  font-size: 1rem;
  background: white;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin-top: 20px;
}

.join_page_wrap #footer {
  display: none;
}
</style>
