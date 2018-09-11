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
                        <div class="thema"><b>폰번호</b></div>
                        <!-- <div class="thema red">(필수)</div> -->
                        <input class="themaInput" type="text" id="phone" name="username">
                      </div>

                      <!--비밀번호-->
                      <div style="text-align: left; margin-top:10px;">
                        <div class="thema"><b>비밀번호</b></div>
                        <!-- <div class="thema red">(필수)</div> -->
                        <input class="themaInput" type="password" id="passwd" name="password">
                      </div>
                      <div style="width:100%; font-size:0; margin-top:20px;">
                        <div class="bottomBtn button" id="" onClick="userCheck()">
                          <a>로그인</a>
                        </div>
                        <div class="bottomBtn button" id="" onclick="goToJoinPage();" >
                          <a>회원가입</a>
                        </div>
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

<style lang="scss" scoped>

.local_login_page_wrap{
  position: fixed;
  width: 100%;
  height:100%;
  #main_container{
    max-width: 500px;
    margin: auto;
    margin-bottom: 100px;
  }
  .backBtn{
    position: absolute;
    top: 20px;
    left: 20px;
    text-decoration: unset;
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
    border:1px solid #ddd;
    color:black;
    font-size: 40%;
    line-height: 250%;
    text-align: center;
    width: 50%;
    margin: 1px 0;
    box-sizing: border-box;
    font-size:14px;
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
    padding:0px 10px;
    margin-top: 5px;
    font-size:40%;
    line-height: 250%;
    width: 100%;
    border: 1px solid #ddd;
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

<script>

  export default {
    name: 'PageIndex',
  };

</script>
