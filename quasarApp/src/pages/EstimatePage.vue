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
          <div class="estimate">견적요청</div>
        </a>

        <div class="shopInfo">
          <div class="leftSide">
            <div class="outer">
              <div class="inner">
                <img class="infoImage" src="../assets/images/motorImage2.png">
              </div>
            </div>
          </div>
          <div class="rightSide">
            <div class="out">
              <div class="inner">
                <ul>
                  <li class="motorName">이광현 공업사</li>
                  <li class="motorAddress">부천시 원미구 원미동 777-30번지</li>
                  <li class="motorPhonNumber">070-1010-1010</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!--정비소 위치-->
        <div id="map" class="motorLocation"></div>

        <!--운영시간-->
        <div class="operatingTimeWrap">
          <div class="title">운영시간</div>
          <div class="content">월,화,수,목,금: 00:00~00:00
            <br>토: 00:00~00:00
            <br>일,공휴일:휴무
          </div>
        </div>

        <!--기본정보-->
        <div class="basicInfoWrap">
          <div class="title">기본정보</div>
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
            <a class="reviewEdit">리뷰 작성</a>
          </div>
          <div class="content">
            <div class="reviewCrad" id="item1">
              <div class="leftSide">
                <div class="outer">
                  <div class="inner">
                    <img class="reviewImg" src="../assets/images/good.png">
                  </div>
                </div>
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
                <div class="outer">
                  <div class="inner">
                    <img class="reviewImg" src="../assets/images/good.png">
                  </div>
                </div>
              </div>
              <div class="rightSide">
                <ul>
                  <li
                    class="reviewContent"
                  >제가 원햇던 날짜에 받아볼 수 있어서 좋았구요. 세심하게 신경써주시는거 같아서 믿음이 갔습니다. 주변 지인들에게 소개 꼭 할께요.</li>
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
import { mapGetters } from "vuex";
import footerComp from "../components/footerComp.vue";
export default {
  name: "EstimatePage",
  components: {
    footerComp
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {
    var mapOptions = {
      center: new naver.maps.LatLng(37.4869015, 126.7886975),
      zoom: 10,
      disableDoubleTapZoom: true,
      draggable: true
    };

    var map = new naver.maps.Map("map", mapOptions);
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.4876528, 126.788727),
      map: map
    });

    var HOME_PATH = window.HOME_PATH || ".";

    var cityhall = new naver.maps.LatLng(37.4874357, 126.7886332),
      map = new naver.maps.Map("map", {
        center: cityhall.destinationPoint(0, 500),
        zoom: 10
      }),
      marker = new naver.maps.Marker({
        map: map,
        position: cityhall
      });

    var contentString = [
      '<div class="iw_inner">',
      '   <h3 style=" line-height: 1rem; border-bottom:1px solid #ddd; margin: 0 0 10px; margin-bottom:0px;  border-left: 5px solid #575eb9; font-size: 16px; background-color: #fafafa; color: #333; padding:0px 5px;"><span >착한 자동차 공업사</span> <div style="font-size:13px; ">032-665-7573 / 010-5277-7573 </div></h3>',
      '   <p style="margin:0; font-size:13px; padding:5px 10px; -5px 0px" >경기도 부천시 원미동 218-21<br />',
      "   </p>",
      "</div>"
    ].join("");

    var infowindow = new naver.maps.InfoWindow({
      content: contentString
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });

    infowindow.open(map, marker);

    $("#map")
      .children()
      .eq(4)
      .children()
      .children()
      .css("transform", "matrix(1, 0, 0, 1, 0, -80)");

    var pano = new naver.maps.Panorama("pano", {
      // panoId: "OregDk87L7tsQ35dcpp+Mg==",
      position: new naver.maps.LatLng(37.3599605, 127.1058814),
      pov: {
        pan: -135,
        tilt: 29,
        fov: 100
      }
    });
  },
  methods: {},
  beforeUpdate() {},
  created() {}
};
</script>

<style lang="scss" scoped>
//colors
$white: white;
$color_blue_violet_approx: #575eb9;
$black: #000;
$gray: gray;

.estimate_wrap {
  .main_inner_wrap {
    padding-left: 0;
    padding-right: 0;
  }
  .mainImg {
    height: 100%;
    width: 100%;
    display: table;
  }
  .motorTitleBar {
    position: relative;
  }
  .motorTitleBarContent {
    position: absolute;
    width: 100%;
    top: 35%;
    .Title {
      text-align: center;
      font-size: 1.7rem;
      color: $white;
    }
    .SubTitle {
      text-align: center;
      font-size: 1rem;
      color: $white;
    }
  }
  .estimateBtn {
    text-decoration: none;
  }
  .estimate {
    background-color: $color_blue_violet_approx;
    color: $white;
    font-size: 55%;
    line-height: 400%;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }
  .shopInfo {
    width: 100%;
    padding: 1rem;
    display: table;
    .leftSide {
      text-align: center;
      float: left;
      height: 100%;
      width: 30%;
    }
    .rightSide {
      float: right;
      height: 100%;
      width: 70%;
      padding-left: 1rem;
      ul {
        height: 100%;
        vertical-align: middle;
        padding: 0;
      }
      li {
        list-style: none;
        line-height: 100%;
      }
      .motorName {
        font-size: 1.5rem;
        font-weight: bold;
        color: $color_blue_violet_approx;
        margin-bottom: 10px;
      }
      .motorAddress,
      .motorPhonNumber {
        font-size: 0.7rem;

        font-weight: 600;
        margin-bottom: 5px;
      }
    }
    .infoImage {
      width: 100%;
    }
  }
  .shopInfo::after {
    content: "";
    display: block;
    clear: both;
  }
  .motorLocation {
    height: 300px;
    width: 100%;
    margin-bottom: 25px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: $color_blue_violet_approx;
    margin-bottom: 15px;
  }
  .operatingTimeWrap {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 30px;
    .content {
      font-size: 0.8rem;
      font-weight: 550;
      line-height: 150%;
    }
  }
  .basicInfoWrap {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 30px;
    .content {
      font-size: 50%;
    }
    ul {
      padding-left: 0px;
      li {
        font-size: 0.8rem;
        list-style: none;
        line-height: 1.5em;
        font-weight: bold;
        width: 50%;
        display: inline-block;
      }
      li::before {
        content: "✓ ";
        font-weight: bold;
        color: $color_blue_violet_approx;
      }
    }
  }
  .reviewWrap {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 30px;
    .content {
      height: 100%;
    }
    .reviewEdit {
      font-size: 60%;
      font-weight: 550;
      margin-right: 10px;
      float: right;
      color: $black;
    }
    .reviewCrad {
      margin-bottom: 20px;
      height: 100%;
      display: flex;
      .leftSide {
        width: 30%;
        text-align: center;
      }
      .rightSide {
        display: inline-block;
        width: 70%;
        vertical-align: top;
        ul {
          padding: 0;
        }
      }
      .reviewImg {
        width: 50%;
      }
      li {
        list-style: none;
      }
      .reviewContent {
        font-size: 0.8rem;
        font-weight: bold;
        line-height: 120%;
        margin-bottom: 10px;
      }
      .reviewCarType {
        font-size: 0.8rem;
        color: $gray;
      }
      .reviewDate {
        font-size: 0.6rem;
        color: $gray;
      }
    }
    .reviewCrad::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .basicInfoWrap::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
