<template>
<a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo"><span class="text">착한 공업사</span></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">앱 관리</a-menu-item>
        <a-menu-item key="2">유저 관리</a-menu-item>
        <a-menu-item key="3">통계 화면</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
            <a-menu-item key="1"><a-icon type="car" />차량 목록 추가</a-menu-item>
          <!-- <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" /> 메뉴 </span>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
            <a-menu-item key="5">option5</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />subnav 3</span>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
            <a-menu-item key="9">option9</a-menu-item>
          </a-sub-menu> -->
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <admin-car-table-comp></admin-car-table-comp>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
  import { mapGetters } from 'vuex'
  import adminCarTableComp from '../components/adminCarTableComp.vue'

  export default {
    name: 'AdminPage',
    components: {
      adminCarTableComp
    },
    data () {
      return {
        collapsed: false,
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



<style lang="scss">
  #q-app{
    max-width: initial !important;
  }
</style>
<style lang="scss" scoped>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  .ant-layout{
    height:100%;
    .logo{
      margin-top: auto !important;
      background: rgba(255, 255, 255, 0) !important;
      .text{
        color: rgba(255, 255, 255, 0.65);
      }
    }
  }
</style>
