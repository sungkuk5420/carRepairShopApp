<template>
  <div class="event_detail_wrap page_wrap">
    <div class="event_container column no-wrap">
      <div class="inner_section">
        <div class="coupon_seach">
          <input type="text" placeholder="쿠폰 번호를 입력해 주세요.">
          <button type="button">등록</button>
        </div>
        <hr>
        <div class="event_content">
            <div class="event_detail">
              <img v-bind:src="imagePath(img)" alt="">
                <div class="event_img_wrap">
                    <img src="../assets/images/auto.png" alt="auto 이미지">
                    <div>
                    <p class="dis_type">{{dis_title}}</p>
                    <p class="dis_content">{{dis_content}}</p>
                    </div>
                </div>
            </div>
            <div class="event_detail_2">
                <h5>{{dis_title}}</h5>
                <p>35,000원(100% OFF) <strong>{{dis_type}}</strong></p>
            </div>
            <div class="event_detail_3">
                <h5>이용시 주의사항</h5>
                <ul>
                    <li>- 해당 쿠폰은 착한공업사 구매자만 사용 가능합니다.</li>
                    <li>- 기아 오토큐 서비스센터에서만 사용 가능합니다.</li>
                    <li>- 타 쿠폰 및 제휴카드의 중복할인은 불가능합니다.</li>
                </ul>
            </div>
            <div class="event_detail_btn">
              <button type="button" class="coupon_btn">쿠폰사용</button>
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
  import eventCard from '../components/eventCardComp.vue'
  export default {
    name: 'PageIndex',
    components: {
      footerComp,
      eventCard
    },
    data () {
      return {
        dis_title : 'a',
        img : 'b',
        dis_type : 'c',
        dis_content : 'd',
      }
    },
    computed: {
      ...mapGetters({
      })
    },
    mounted () {
      console.log('aa');
      this.dis_title = this.$route.query.dis_title;
      this.img = this.$route.query.img;
      this.dis_type = this.$route.query.dis_type;
      this.dis_content = this.$route.query.dis_content;
    },
    methods: {
      imagePath(img){
        return require('../assets/images/'+img+'.jpg');
      }
    },
    beforeUpdate () {

    },
    created () {
    },
  };

</script>



<style lang="scss" scoped>

.event_container{
  height:100%;
}

.event_detail_wrap {height:100%;}
.event_wrap hr, .event_detail_wrap hr {margin: 0 0 1rem 0;}
.event_wrap .inner_section, .event_detail_wrap .inner_section{
    height:100%;
    padding: 15px;
    overflow-y: auto;
}


.event_detail_wrap .event_content {
    position: relative;
}
.event_wrap .event_content .event_detail, .event_detail_wrap .event_content .event_detail{
    position: relative;
    width: 100%;
    height: 200px;
    text-align: center;
    margin-bottom: 1rem;
}


.event_wrap .coupon_seach, .event_detail_wrap .coupon_seach {
    margin-bottom: 1rem;
}
.event_wrap .coupon_seach input, .event_detail_wrap .coupon_seach input {
    width: 80%;
    height: 30px;
    font-size: 13px;
    border: 1px solid #ccc;
    padding-left: 10px;
}
.event_wrap .coupon_seach input::placeholder, .event_detail_wrap .coupon_seach input::placeholder {
    color: #ccc;
}
.event_wrap .coupon_seach button, .event_detail_wrap .coupon_seach button {
    width: 17%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border: 0;
    font-size: 15px;
    vertical-align: middle;
    border-radius: 5px;
    background: #431dad;
}

.event_detail_wrap .event_detail img {
    width: 100%;
    height:200px;
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
.event_wrap .event_img_wrap h5 ,.event_detail_wrap .event_img_wrap h5{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    color: #ad0c0c;
    font-weight: 700;
    font-size: 20px;
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
.event_detail_wrap .event_detail_btn {
    position: absolute;
    left: 50%;
    top: 450px;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
}
.event_detail_wrap .coupon_btn {
    display: inline-block;
    width: 90%;
    height: 40px;
    border: 0;
    background: #431dad;
    color: #fff;
    font-size: 20px;
}
.event_detail_wrap .event_detail_2 {
    position: absolute;
    left: 50%;
    top: 190px;
    transform: translateX(-50%);
    width: 90%;
    padding: 1rem;
    font-size: 15px !important;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #ccc;

    h5{
      font-size:15px;
      line-height: 15px;
      font-weight: bold;
      margin: 0;
    }
}
.event_detail_wrap .event_detail_2 p {
    text-align: right;
    margin-top: 10px;
    font-size: 15px;
    margin-bottom:0;
}
.event_detail_wrap .event_detail_2 p strong {
    font-size: 15px;
}
.event_detail_wrap .event_detail_3 {
  position: absolute;
  left: 50%;
  top: 280px;
  transform: translateX(-50%);
  width: 90%;
  padding: 1rem;
  font-size: 15px;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ccc;
  h5 {
    margin-top: 0;
    margin-bottom: 10px;
      font-weight: bold;
  }
  ul{
    margin:0;
    padding:0;
    li{
      font-size: 0.8rem;
      line-height: 19px;
      list-style: none;
    }
  }

}
</style>
