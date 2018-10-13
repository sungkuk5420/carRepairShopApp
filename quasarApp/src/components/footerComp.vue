<template>
  <div id="footer" class="">
    <div class="row">
      <ul>
        <li><router-link to="/main"><span><img src="../assets/images/home_off.png" alt="home 페이지로 이동"></span></router-link></li>
        <li><router-link to="/event"><span><img src="../assets/images/event_off.png" alt="event 페이지로 이동"></span></router-link></li>
        <li class="motores_li"><router-link to="/motores"><span><img src="../assets/images/estimate_off.png" alt="견적요청 페이지로 이동"></span></router-link></li>
        <li><router-link to="/estimate"><span><img src="../assets/images/service_center_off.png" alt="공업사 페이지로 이동"></span></router-link></li>
        <li class="my_li"><router-link to="/login"><span><img src="../assets/images/my_off.png" alt="마이 페이지로 이동"></span></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'footerDiv',
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

#footer ul {
  width: 100%;
  padding: 0;
  margin: 0;
  display: table;
  font-size: 2rem;
  background: white;
  li {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 20%;
    padding: 1rem 0 10%;
    border: 1px solid #ddd;
    box-sizing: border-box;
    text-align: center;
    font-size: 50%;
    line-height: 0;
    min-height: 80px;
    a {
      display: inline-block;
      height: 100%;
      span {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 60%;
        }
      }
    }
    &.motores_li img {
      width: 80%;
    }
    &.my_li img {
      width: 90%;
    }
  }
}

</style>
