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
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <q-checkbox id="btnChk" v-model="checked" label="개인정보 및 서비스 이용약관에 동의합니다." />
            </div>
          </div>
        </div>
        <div class="row-div">
          <div class="outer">
            <div class="inner">
              <q-btn label="견적요청" class="writeBtn" :loading="loginBtnProgressBl"/>
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
import headerComp from '../components/headerComp.vue'
  export default {
    name: 'templetePage',
    components: {
      footerComp,
      headerComp
    },
    data () {
      return {
        checked:false,
        areaVal:''
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

<style>

.input-place-holder-mini .q-if:before,
.input-place-holder-mini .q-if:after{
  color: rgba(189, 189, 189, 0) !important;
}
.input-place-holder-mini textarea{
  border: 1px solid #DDDDDD !important;
  padding: 10px;
}
.input-place-holder-mini .q-if-standard .q-if-label{
  margin-top: 1rem;
  left: 1rem;
  font-size: 0.8rem ;
}
.input-place-holder-mini .q-if-standard .q-if-label.q-if-label-above .q-if-label-inner,
.input-place-holder-mini .q-if-standard .q-if-label.q-if-label-above .q-if-label-spacer{
  font-size: 0.7rem !important;
}
.input-place-holder-mini .q-if-standard .q-if-label.q-if-label-above,
.input-place-holder-mini .q-if-inverted .q-if-label.q-if-label-above{
  margin-top: 0rem;
  left: 0rem;
}
.input-place-holder-mini .q-if-label-inner,
.input-place-holder-mini .q-if-label-spacer{
  font-size: 0.8rem ;
}

</style>


<style lang="scss" scoped>
$border-color1:#CDCDCD;
$border-color2:#EFEFEF;
$text-color:#B5B5B5;
$sub-text-color:#9F9FA0;
$title-color:#3B3743;
$white: white;
$basic-purple: #585ABD;
.motores_wrap{
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

.row-div{
  padding:1rem 1.5rem;
  color:$text-color;
}
.inner{
  text-align: left;
}

.title-div{
  padding:1rem;
  background: #F6F7FA;
  font-weight: bold;
  color:$title-color;
  .text{
    font-size:0.8rem;
  }
}
.text{
  font-size:0.6rem;
}
.border-div{
  background: $border-color1;
  width: 100%;
  height: 1px;
  &.color-2{
    background: $border-color2;
  }
}

.sub-text{
  margin-left: 10px;
  color:$sub-text-color;
}


.writeBtn{
  width: 100%;
  font-size: 1rem;
  color:$white;
  background: $basic-purple;
}
</style>
