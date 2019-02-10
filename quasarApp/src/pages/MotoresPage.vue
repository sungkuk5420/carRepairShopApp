<template>
<div class="motores_wrap page_wrap">
    <div id="main_container" class="column no-wrap">
      <div class="main_inner_wrap">
        <!--공업사 메인 이미지-->
        <div class="motorTitleBar">
          <img class="mainImg" src="../assets/images/motorservicecenter.png">
          <div class="motorTitleBarContent">
              <h1 class="Title">착한 자동차 공업사</h1>
              <p class="SubTitle">부천시 원미구 원미동 777-30번지</p>
          </div>
        </div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">차종</span>
            </div>
          </div>
        </div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <span class="text">현대</span>
            </div>
          </div>
        </div>
        <div class="border-div"></div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">정보</span>
            </div>
          </div>
        </div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <span class="text">김성국</span>
            </div>
          </div>
        </div>
        <div class="border-div color-2"></div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <span class="text">010-3533-4805</span>
            </div>
          </div>
        </div>
        <div class="border-div"></div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">선택 요청사항</span>
            </div>
          </div>
        </div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <span class="text">보험수리</span>
            </div>
          </div>
        </div>
        <div class="border-div"></div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">요구사항</span>
              <span class="sub-text">어떤 부위가 어떻게 손상되었나요?</span>
            </div>
          </div>
        </div>
        <div class="row-div input-place-holder-mini">
          <div class="outer">
            <div class="inner">
              <q-input
                v-model="areaVal"
                type="textarea"
                float-label="ex) 운전석 앞문이 찌그러졌습니다."
                :max-height="100"
                rows="7"
              />
            </div>
          </div>
        </div>
        <div class="border-div"></div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">예약 날짜</span>
            </div>
          </div>
        </div>
        <div class="row-div">
          <div :style="{ border: '1px solid #d9d9d9', borderRadius: '4px' }">
            <a-calendar :fullscreen="false" @select="onSelect" @panelChange="onPanelChange" >  
            </a-calendar>
          </div>
        </div>
        <div class="border-div"></div>
        <div class="row-div title-div">
          <div class="outer">
            <div class="inner">
              <span class="text">프로모션 참여코드</span>
              <span class="sub-text">이벤트 코드를 입력해주세요.</span>
            </div>
          </div>
        </div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <span class="text">LOTEMDS2</span>
            </div>
          </div>
        </div>
        <div class="border-div"></div>
        <!-- <div class="row-div">
          <div class="outer">
            <div class="inner">
              <q-checkbox id="btnChk" v-model="checked" label="개인정보 및 서비스 이용약관에 동의합니다." />
            </div>
          </div>
        </div> -->
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <a-button type="primary" @click="showModal" class="q-btn writeBtn">견적 요청</a-button>
              <a-modal
                title="예약 확인"
                v-model="visible"
                @ok="handleOk"
              >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <template slot="footer">
                <a-button key="back" @click="handleCancel">취소</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                  확인
                </a-button>
              </template>
            </a-modal>
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
import moment from "moment";
import footerComp from "../components/footerComp.vue";
import headerComp from "../components/headerComp.vue";
export default {
  name: "templetePage",
  components: {
    footerComp,
    headerComp
  },
  data() {
    return {
      value: moment("2017-01-25"),
      selectedValue: moment("2017-01-25"),
      value1: moment("2017-01-25"),
      checked: false,
      visible: false,
      areaVal: ""
    };
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {
    var monthAndYearRadioButtons = document.querySelectorAll(
      ".ant-radio-button-wrapper>span:last-child"
    );
    monthAndYearRadioButtons[0].innerText = "일"; // day 일로 변경
    monthAndYearRadioButtons[1].innerText = "월"; // month 월로 변경

    this.changeDaysToKoeanText();
    this.appendSeletedDateText();
    var thisMonth = moment().format("MM");
    var selectMonthDOM = this.changeMonthSelectButtonToKoreanText(thisMonth); // 셀렉트박스 한글로 변경

    selectMonthDOM.addEventListener("click", () => {
      setTimeout(() => {
        this.changeMonthSelectButtonToKoreanText();
      }, 0);
    });
  },
  methods: {
    changeMonthSelectButtonToKoreanText(monthDate) {
      //date는 MM의형식으로 문자열을받는다.
      if (monthDate) {
        var selectMonthDOM =
          document.querySelector(
            ".ant-fullcalendar-month-select .ant-select-selection-selected-value"
          ) || "";
        if (selectMonthDOM) {
          selectMonthDOM.innerText = monthDate + "월"; // 셀렉트박스 한글로 변경
        }

        return selectMonthDOM;
      }
      var calendarDays = document.querySelectorAll(
        ".ant-select-dropdown-menu-item"
      ); // 월선택 셀렉트 박스에서
      var calendarMonths = document.querySelectorAll(
        ".ant-select-dropdown .ant-select-dropdown-menu-item"
      ); // 월선택 화에서 1월~12월 영문글자돔
      var daysToKoeanText = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ];
      for (let i = 0; i < calendarMonths.length; i++) {
        const currentElement = calendarMonths[i];
        currentElement.innerText = daysToKoeanText[i];
      }
    },
    changeDaysToKoeanText() {
      var calendarDays = document.querySelectorAll(
        ".ant-fullcalendar-table thead tr .ant-fullcalendar-column-header-inner"
      ); // 월간 달력에서 일월화수목금 영문글자돔
      var daysToKoeanText = ["일", "월", "화", "수", "목", "금", "토"];
      console.log(calendarDays.length);
      for (let i = 0; i < calendarDays.length; i++) {
        const currentElement = calendarDays[i];
        currentElement.innerText = daysToKoeanText[i];
      }
    },
    changeMonthsToKoeanText() {
      var calendarMonths = document.querySelectorAll(
        ".ant-fullcalendar-month .ant-fullcalendar-value"
      ); // 월선택 화에서 1월~12월 영문글자돔
      var daysToKoeanText = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ];
      for (let i = 0; i < calendarMonths.length; i++) {
        const currentElement = calendarMonths[i];
        currentElement.innerText = daysToKoeanText[i];
      }
    },
    appendSeletedDateText(date) {
      var calendarDateTextDOM = document.querySelector(
        ".fullcalender-date-text"
      );
      if (calendarDateTextDOM) {
        calendarDateTextDOM.innerText = date;
        return false;
      }
      var divDOM = document.createElement("div");
      divDOM.classList.add("fullcalender-date-text");
      divDOM.innerText = date ? date : moment().format("YYYY-MM-DD");

      var appendParentDOM = document.querySelector(".ant-fullcalendar-header");
      appendParentDOM.insertBefore(divDOM, appendParentDOM.firstChild);
    },
    onSelect(value) {
      this.value = value;
      this.selectedValue = value;
      console.log("onSelect");
      this.appendSeletedDateText(this.selectedValue.format("YYYY-MM-DD"));

      setTimeout(() => {
        this.changeDaysToKoeanText();
        this.changeMonthSelectButtonToKoreanText(this.value.format("MM"));
      }, 0);
    },
    onPanelChange(value, value2, value3) {
      this.value = value;

      setTimeout(() => {
        this.changeDaysToKoeanText();
        this.changeMonthSelectButtonToKoreanText(this.value.format("MM"));
      }, 0);
    },
    showModal() {
      this.visible = true;
      console.log(this);
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      this.visible = false;
    }
  },
  beforeUpdate() {},
  created() {}
};
</script>

<style>
.input-place-holder-mini .q-if:before,
.input-place-holder-mini .q-if:after {
  color: rgba(189, 189, 189, 0) !important;
}
.input-place-holder-mini textarea {
  border: 1px solid #dddddd !important;
  padding: 10px;
}
.input-place-holder-mini .q-if-standard .q-if-label {
  margin-top: 1rem;
  left: 1rem;
  font-size: 0.8rem;
}
.input-place-holder-mini
  .q-if-standard
  .q-if-label.q-if-label-above
  .q-if-label-inner,
.input-place-holder-mini
  .q-if-standard
  .q-if-label.q-if-label-above
  .q-if-label-spacer {
  font-size: 0.7rem !important;
}
.input-place-holder-mini .q-if-standard .q-if-label.q-if-label-above,
.input-place-holder-mini .q-if-inverted .q-if-label.q-if-label-above {
  margin-top: 0rem;
  left: 0rem;
}
.input-place-holder-mini .q-if-label-inner,
.input-place-holder-mini .q-if-label-spacer {
  font-size: 0.8rem;
}

.motores_wrap .ant-fullcalendar-fullscreen .ant-fullcalendar-content {
  height: auto;
  overflow-y: auto;
  position: static;
  width: auto;
  left: auto;
  bottom: auto;
}

.motores_wrap .ant-fullcalendar-year-select,
.motores_wrap .ant-fullcalendar-header .ant-radio-group {
  display: none;
}

.motores_wrap .ant-select-selection.ant-select-selection--single {
  width: 75px;
}

.fullcalender-date-text {
  display: inline-block;
  padding: 0 10px;
  color: rgba(0, 0, 0, 0.6509803921568628);
}
</style>


<style lang="scss" scoped>
$border-color1: #cdcdcd;
$border-color2: #efefef;
$text-color: #b5b5b5;
$sub-text-color: #9f9fa0;
$title-color: #3b3743;
$white: white;
$basic-purple: #585abd;
.motores_wrap {
  .main_inner_wrap {
    padding-left: 0;
    padding-right: 0;
  }
  .motorTitleBar {
    position: relative;
    .mainImg {
      height: 100%;
      width: 100%;
      display: table;
    }
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
}

.row-div {
  padding: 1rem 1.5rem;
  color: $text-color;
}
.inner {
  text-align: left;
}

.title-div {
  padding: 1rem;
  background: #f6f7fa;
  font-weight: bold;
  color: $title-color;
  .text {
    font-size: 0.8rem;
  }
}
.text {
  font-size: 0.6rem;
}
.border-div {
  background: $border-color1;
  width: 100%;
  height: 1px;
  &.color-2 {
    background: $border-color2;
  }
}

.sub-text {
  margin-left: 10px;
  color: $sub-text-color;
}

.writeBtn {
  width: 100%;
  font-size: 1rem;
  color: $white;
  background: $basic-purple;
  border: 0;
}
</style>
