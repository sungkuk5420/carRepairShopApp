<template>
<div class="estimate_wrap page_wrap">
    <div id="main_container" class="column no-wrap">
      <div class="main_inner_wrap">
        <!--공업사 메인 이미지-->
        <div>
          <div class="motorTitleBar">
            <img class="mainImg" src="../assets/images/image.png">
            <div class="motorTitleBarContent">
                <h1 class="Title">착한 자동차 공업사</h1>
                <p class="SubTitle">부천시 원미구 원미동 777-30번지</p>
            </div>
          </div>
        </div>

        <!--견적요청 버튼-->
        <a class="estimateBtn" href="/motores">
          <div class="estimate">견적요청
          </div>
        </a>

        <div class="shopInfo">

          <div class="leftSide">
            <img class="infoImage" src="../assets/images/motorImage2.png">
          </div>
          <div class="rightSide">
            <ul>
              <li class="motorName">이광현 공업사</li>
              <li class="motorAddress">부천시 원미구 원미동 777-30번지</li>
              <li class="motorPhonNumber">070-1010-1010</li>
            </ul>
          </div>
        </div>

        <!--정비소 위치-->
        <div id="map" class="motorLocation"></div>

        <!--운영시간-->
        <div class="operatingTimeWrap">
          <div class="title">
            운영시간
          </div>
          <div class="content">
            월,화,수,목,금: 00:00~00:00
            <br> 토: 00:00~00:00
            <br> 일,공휴일:휴무
          </div>
        </div>

        <!--기본정보-->
        <div class="basicInfoWrap">
          <div class="title">
            기본정보
          </div>
          <div class="content">
            <ul>
              <li>오일류 교환</li>
              <li>차량 튜닝</li>
              <li>타이어 교체</li>
              <li>무료세차</li>
              <li>외부 수리</li>
              <li>열처리 부스 자체 보유</li>
            </ul>
          </div>
        </div>

        <!--고객후기-->
        <div class="reviewWrap">
          <div class="title">
            고객후기
            <a class="reviewEdit">
              리뷰 작성
            </a>
          </div>
          <div class="content">
            <div class="reviewCrad" id="item1">
              <div class="leftSide">
                <img class="reviewImg" src="../assets/images/good.png">
              </div>
              <div class="rightSide">
                <ul>
                  <li class="reviewContent">매우만족</li>
                  <li class="reviewCarType">아우디a4/2014년 오너</li>
                  <li class="reviewDate">2018년8월2일 2:10</li>
                </ul>
              </div>
            </div>

            <div class="reviewCrad" id="item2">
              <div class="leftSide">
                  <img class="reviewImg" src="../assets/images/good.png">
              </div>
              <div class="rightSide">
                <ul>
                  <li class="reviewContent">제가 원햇던 날짜에 받아볼 수 있어서 좋았구요. 세심하게 신경써주시는거 같아서 믿음이 갔습니다. 주변 지인들에게 소개 꼭 할께요.</li>
                  <li class="reviewCarType">아우디a4/2014년 오너</li>
                  <li class="reviewDate">2018년8월2일 2:10</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <footer-comp></footer-comp>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  import footerComp from '../components/footerComp.vue'
  export default {
    name: 'EstimatePage',
    components: {
      footerComp
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

    },
    beforeUpdate () {

    },
    created () {
    },
  };

</script>



<style lang="scss" scoped>
.estimate_wrap .main_inner_wrap{
    padding-left: 0;
    padding-right: 0;
}

.estimate_wrap .mainImg {
    height: 100%;
    width: 100%;
    display: table;
}


.estimate_wrap .motorTitleBar{
    position: relative;
}

.estimate_wrap .motorTitleBarContent{
    position: absolute;
    width: 100%;
    top: 35%;
}

.estimate_wrap .motorTitleBarContent .Title{
    text-align: center;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    color: white;
}

.estimate_wrap .motorTitleBarContent .SubTitle{
    text-align: center;
    font-size: 1rem;
    color: white;
}

.estimate_wrap .estimateBtn{
    text-decoration: none;
}

.estimate_wrap .estimate {
    background-color: #575eb9;
    color: white;
    font-size: 55%;
    line-height: 400%;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
}

.estimate_wrap .shopInfo{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 10px;
    height: 105px;
}

.estimate_wrap .shopInfo .leftSide{
    text-align: center;
    float: left;
    height: 100%;
    width: 30%;
}

.estimate_wrap .shopInfo .rightSide{
    float: right;
    height: 100%;
    width: 70%;
}

.estimate_wrap .shopInfo::after{
    content: "";
    display: block;
    clear: both;
}

.estimate_wrap .shopInfo .infoImage{
    width: 100%;
    min-width: 40px;
    max-width: 110px;
}

.estimate_wrap .shopInfo .rightSide ul{
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 100%;
    vertical-align: middle;
}
.estimate_wrap .shopInfo .rightSide li{
    list-style: none;
    line-height: 100%;
}

.estimate_wrap .shopInfo .rightSide .motorName{
    font-size: 1.5rem;
    font-weight: bold;
    color: #575eb9;
    margin-bottom: 10px;
}

.estimate_wrap .shopInfo .rightSide .motorAddress,
.estimate_wrap .shopInfo .rightSide .motorPhonNumber{
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.estimate_wrap .motorLocation {
    height: 25%;
    width: 100%;
    margin-bottom: 25px;
}

.estimate_wrap .title{
    font-size: 60%;
    font-weight: bold;
    color: #575eb9;
    margin-bottom: 15px;
}

.estimate_wrap .operatingTimeWrap,
.estimate_wrap .basicInfoWrap,
.estimate_wrap .reviewWrap{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 30px;
}

.estimate_wrap .operatingTimeWrap .content{
    font-size: 50%;
    font-weight: 550;
    line-height: 150%;
}

.estimate_wrap .basicInfoWrap .content{
    font-size: 50%;
}

.estimate_wrap .basicInfoWrap li{
    list-style: none;
    line-height: 1.5em;
    font-weight: bold;
    float: left;
    width: 50%;
}

.estimate_wrap .basicInfoWrap li::before{
    content: '✓ ';
    font-weight: bold;
    color: #575eb9;
}

.estimate_wrap .basicInfoWrap::after{
    content: "";
    display: block;
    clear: both;
}

.estimate_wrap .reviewWrap .reviewEdit{
    font-size: 60%;
    font-weight: 550;
    margin-right: 10px;
    float: right;
    color: #000;
}

.estimate_wrap .reviewWrap .reviewCrad{
    margin-bottom: 20px;
}

.estimate_wrap .reviewWrap .reviewCrad .leftSide{
    float: left;
    text-align: center;
    padding: 0 1rem;
}

.estimate_wrap .reviewWrap .reviewCrad .rightSide{
    float: left;
    width: 75%;
}

.estimate_wrap .reviewWrap .reviewCrad::after{
    content: "";
    display: block;
    clear: both;
}

.estimate_wrap .reviewWrap .reviewCrad .reviewImg{
    width: 38px;
}

.estimate_wrap .reviewWrap .reviewCrad li{
    list-style: none;
}

.estimate_wrap .reviewWrap .reviewCrad .reviewContent{
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 120%;
    margin-bottom: 10px;
}

.estimate_wrap .reviewWrap .reviewCrad .reviewCarType{
    font-size: 1rem;
    color: gray;
}

.estimate_wrap .reviewWrap .reviewCrad .reviewDate{
    font-size: 1rem;
    color: gray;
}
</style>
