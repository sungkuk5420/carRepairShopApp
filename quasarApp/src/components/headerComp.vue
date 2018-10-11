<template>
  <div id="header" class="">
    <div class="row">
      <a v-if="headerBackBtn" class="backBtn" @click="$router.go(-1)">
        <span class="text"> ⇦ </span>
      </a>
      <div class="outer">
        <div class="inner">
          <span class="title"> {{title}} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'headerDiv',
    props: ['title','headerBackBtn'],
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
#header{
  .row{
    border-bottom: 1px solid #ddd;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
  .title{
    font-size:1rem;
  }
  .backBtn .text{
    font-size:1rem;
    font-weight: bold;
  }
  .backBtn{
    position: absolute;
    left: 20px;
    text-decoration: unset;
    cursor: pointer;
  }
  a{
    color: #0c0c0c !important;
  }
}
/* Tablet & Desktop Device */
// 사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
@media all and (min-width:768px) {
  #header{
    .title{
      font-size:0.6rem;
    }
    .backBtn .text{
      font-size:0.6rem;
      font-weight: bold;
    }
  }
}

/* Tablet Device */
@media all and (min-width:768px) and (max-width:1024px) {
// 사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
}

/* Desktop Device */
// 사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
@media all and (min-width:1025px) {
  #header{
    .title{
      font-size:1rem;
    }
    .backBtn .text{
      font-size:1rem;
      font-weight: bold;
    }
  }
}
</style>
