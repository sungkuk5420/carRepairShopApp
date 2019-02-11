<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo">
        <span class="text">착한 공업사</span>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="changePage(1)">앱 관리</a-menu-item>
        <a-menu-item key="2" @click="changePage(2)">유저 관리</a-menu-item>
        <a-menu-item key="3" @click="changePage(3)">쿠폰 관리</a-menu-item>
        <a-menu-item key="4" @click="changePage(4)">예약 관리</a-menu-item>
        <a-menu-item key="5" @click="changePage(5)">통계 화면</a-menu-item>
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
          <a-menu-item key="1" v-if="adminPageInfo.pageIndex===1" @click="changeTab(1)">
            <a-icon type="car"/>차량 목록 추가
          </a-menu-item>
          <a-menu-item key="2" v-if="adminPageInfo.pageIndex===1" @click="changeTab(2)">
            <a-icon type="car"/>차량 목록 추가2
          </a-menu-item>
          <a-menu-item key="3" v-if="adminPageInfo.pageIndex===2" @click="changeTab(1)">
            <a-icon type="user"/>유저 정보 수정
          </a-menu-item>
          <a-menu-item key="4" v-if="adminPageInfo.pageIndex===2" @click="changeTab(2)">
            <a-icon type="user"/>유저 정보 수정2
          </a-menu-item>
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
          </a-sub-menu>-->
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <admin-car-table-comp v-if="adminPageInfo.pageIndex===1"></admin-car-table-comp>
          <admin-user-table-comp v-if="adminPageInfo.pageIndex===2"></admin-user-table-comp>
          <a-modal title="관리자 비밀번호" v-model="openModalPopupState">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">취소</a-button>
              <a-button
                key="submit"
                type="primary"
                :loading="loading"
                @click="checkAdminPassword"
              >확인</a-button>
            </template>
            <div class="row-div popup">
              <div class="content-div">
                <div class="components-input-demo-presuffix">
                  <span class="label">비밀 번호</span>
                  <a-input placeholder="비밀 번호" v-model="password" ref="userNameInput">
                    <a-icon slot="prefix" type="lock"/>
                  </a-input>
                </div>
              </div>
            </div>
          </a-modal>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import adminCarTableComp from "../components/adminCarTableComp.vue";
import adminUserTableComp from "../components/adminUserTableComp.vue";

export default {
  name: "AdminPage",
  components: {
    adminCarTableComp,
    adminUserTableComp
  },
  data() {
    return {
      collapsed: false,
      password: "",
      openModalPopupState: true
    };
  },
  computed: {
    ...mapGetters({
      adminPageInfo: "database/getAdminPageInfo"
    })
  },
  mounted() {},
  methods: {
    changePage(index) {
      var pageIndex = index;
      this.$store.dispatch("database/setAdminPageIndex", {
        pageIndex
      });
    },
    changeTab(index) {
      var tabIndex = index;
      this.$store.dispatch("database/setAdminTabIndex", {
        tabIndex
      });
    },
    checkAdminPassword() {
      var thisObj = this;
      this.$store.dispatch("database/checkAdminPassword", {
        password: thisObj.password,
        cb: function(result) {
          if (result === "success") {
            thisObj.$message.success("로그인 성공.");
            thisObj.openModalPopupState = false;
          } else {
            thisObj.$message.error("비밀번호를 확인해주세요.");
            thisObj.openModalPopupState = true;
          }
        }
      });
    },
    handleCancel() {
      document.getElementsByClassName("ant-modal-close")[0].click();
    }
  },
  beforeUpdate() {},
  created() {}
};
</script>



<style lang="scss">
#q-app {
  max-width: initial !important;
}
.hide {
  display: none;
}
</style>
<style lang="scss" scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.ant-layout {
  height: 100%;
  .logo {
    margin-top: auto !important;
    background: rgba(255, 255, 255, 0) !important;
    .text {
      color: rgba(255, 255, 255, 0.65);
    }
  }
}
</style>
