<template>
  <div class="event_content">
      <router-link :to="{path:'/eventDetails', query: {img:'back_img1.jpg',dis_title: '무상점검',dis_type: '100퍼 할인',dis_content: '오일류,패드류, 등 기본 정비 10개 항목'}}">
        <div class="event1">
            <button class="event_img_wrap">
                <img src="../assets/images/auto.png" alt="auto 이미지">
                <div>
                    <h2>무상점검</h2>
                    <p class="dis_type">100% 할인</p>
                    <p class="dis_content">오일류,패드류, 등 기본 정비 10개 항목</p>
                </div>
            </button>
        </div>
        <input type="hidden" name="img" value="../assets/images/back_img1.jpg">
        <input type="hidden" name="dis_title" value="무상점검">
        <input type="hidden" name="dis_type" value="100% 할인">
        <input type="hidden" name="dis_content" value="오일류,패드류, 등 기본 정비 10개 항목">
      </router-link>
      <router-link :to="{path:'/eventDetails', query: {img:'back_img2.jpg',dis_title: '엔진오일 할인권',dis_type: '200,000원',dis_content: 'ZIC 및 동급 엔진오일기준'}}">
          <div class="event2">
              <button class="event_img_wrap">
                  <img src="../assets/images/auto.png" alt="auto 이미지">
                  <div>
                      <h2>엔진오일 할인권</h2>
                      <p class="dis_type">200,00원</p>
                      <p class="dis_content">ZIC 및 동급 엔진오일기준</p>
                  </div>
                  <input type="hidden" name="dis_title" value="엔진오일 할인권">
                  <input type="hidden" name="img" value="/images/back_img2.jpg">
                  <input type="hidden" name="dis_type" value="200,000원">
                  <input type="hidden" name="dis_content" value="ZIC 및 동급 엔진오일기준">
              </button>
          </div>
      </router-link>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'eventCardComp',
    components: {
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


  .event_content{
    position: relative;
    div {
      &.event1, &.event2 {
        position: relative;
        width: 100%;
        height: 200px;
        text-align: center;
        margin-bottom: 1rem;
      }
    }
    .event_detail {
      position: relative;
      width: 100%;
      height: 200px;
      text-align: center;
      margin-bottom: 1rem;
      img {
        width: 100%;
        height: 200px;
      }
    }


    .event1 {
      background: url('../assets/images/back_img1.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .event2 {
      background: url('../assets/images/back_img2.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .event_img_wrap {
      width: 90%;
      height: 150px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
.event_wrap .event_img_wrap, .event_detail_wrap .event_img_wrap {
    width: 90%;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.event_wrap .event_img_wrap img, .event_detail_wrap .event_img_wrap img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
}
.event_wrap .event_img_wrap > div, .event_detail_wrap .event_img_wrap > div  {
    position: relative;
    width: 85%;
    height: 100%;
}
.event_wrap .event_img_wrap h2 ,.event_detail_wrap .event_img_wrap h2{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    color: #ad0c0c;
    font-weight: 700;
    font-size: 20px;
    margin-top: 0;
}
.event_wrap .event_img_wrap .dis_type, .event_detail_wrap .event_img_wrap .dis_type {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: 31px;
    font-weight: 800;
    color: black;
}
.event_detail_wrap .event_img_wrap .dis_type {
    top: 50%;
    transform: translate(-50%,-50%);
}
.event_wrap .event_img_wrap .dis_content, .event_detail_wrap .event_img_wrap .dis_content {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: 12px;
    color: #9b9fa0;
}

</style>
