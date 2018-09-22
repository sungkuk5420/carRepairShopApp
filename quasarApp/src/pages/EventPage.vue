<template>
  <div class="event_wrap page_wrap">
    <div class="event_container row column no-wrap">
      <div class="inner_section">
        <div class="coupon_seach">
          <input type="text" placeholder="쿠폰 번호를 입력해 주세요.">
          <button type="button">등록</button>
        </div>
        <hr>
        <event-card-comp></event-card-comp>
      </div>
      <footer-comp></footer-comp>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  import footerComp from '../components/footerComp.vue'
  import eventCardComp from '../components/eventCardComp.vue'
  export default {
    name: 'PageIndex',
    components: {
      footerComp,
      eventCardComp
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
* {
  margin: 0;
  padding: 0;
}

.event_container {
  height: 100%;
  overflow-y: auto;
}

.event_detail_wrap {
  height: 100%;
}

.event_wrap hr, .event_detail_wrap hr {
  margin: 0 0 1rem 0;
}

.event_wrap .inner_section, .event_detail_wrap .inner_section {
  height: 100%;
  padding: 15px;
  overflow-y: auto;
}

.event_wrap{
  .coupon_seach, .event_detail_wrap .coupon_seach {
    margin-bottom: 1rem;
  }
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
  margin-left: 10px;
}



</style>
