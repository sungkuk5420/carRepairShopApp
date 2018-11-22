<template>
  <div>
    <a-input-search placeholder="input search text" @search="searchUser" size="large" v-model="inputVal">
      <a-button slot="enterButton">추가</a-button>
    </a-input-search>
    <a-table :columns="columns"
      :pagination="{pageSize: 25 }"
      :rowKey="record => record.index"
      :dataSource="userList"
      :loading="loading"
      @change="handleTableChange"
    >
    <template slot="thumbnail_image" slot-scope="text, record, index">
     <img v-bind:src="record.thumbnail_image == null? '../assets/images/default-user-image.jpg': record.thumbnail_image" alt="" class="user-image">
    </template>
    <template slot="action" slot-scope="text, record, index">
      <a @click="removeCar(index);">삭제</a>
    </template>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import reqwest from 'reqwest';
const columns = [{
  title: '번호',
  dataIndex: 'index',
  sorter: true,
  width: 100,
  scopedSlots: { customRender: 'index' },
  sorter: (a, b) => a.index - b.index,
}, {
  title: '차량번호',
  dataIndex: 'car_number',
  width: 'auto',
},{
  title: '폰번호',
  dataIndex: 'phone_number',
  width: 'auto',
},{
  title: '유저 이름',
  dataIndex: 'user_name',
  width: 'auto',
},{
  title: '차량 종류',
  dataIndex: 'car_type',
  width: 'auto',
},{
  title: '주행 거리',
  dataIndex: 'car_km',
  width: 'auto',
},{
  title: '유저 이미지',
  dataIndex: 'thumbnail_image',
  width: 'auto',
  scopedSlots: { customRender: 'thumbnail_image' },
},{
  title: '유저 등급',
  dataIndex: 'user_level',
  width: 'auto',
},{
  title: '회원 종류',
  dataIndex: 'login_type',
  width: 'auto',
},
{ title: '동작',
  dataIndex: 'action',
  key: '',
  width: 100,
  scopedSlots: { customRender: 'action' },
  }];

export default {
  name: 'adminCarTableComp',
  mounted() {
    this.fetch();
  },
  data() {
    return {
      loading: false,
      columns,
      inputVal:''
    }
  },
  computed: {
    ...mapGetters({
        userList: 'database/getUserDataBase'
    })
  },
  methods: {
    handleTableChange () {
      this.fetch();
    },
    fetch () {
      var vueObj = this;
      console.log(vueObj.carList);
      vueObj.loading = true;
        this.$store.dispatch('database/selectTable',{
            tableName:'users',
            fields:'car_number,phone_number,user_name,car_type,car_km,user_level,thumbnail_image,profile_image,login_type',
            cb: function(data){
              console.log(data);
              vueObj.loginBtnProgressBl = false;
              if(data == 'no User'){
                vueObj.loading = false;
              }else if(data == 'error'){
                alert('error! ');
              }else{
                var users = data;
                console.log('users',users);
                vueObj.$store.dispatch('database/setUsers',{
                  vueObj: vueObj,
                  users:users
                });
                vueObj.loading = false;
              }
            }
          }
        );
    },
    searchUser () {

    }
  }
};
</script>




<style lang="scss">
  .ant-layout-content{
    overflow: auto;
  }
</style>
<style lang="scss" scoped>
  .user-image{
    width:50px;
    height:50px;
    border-radius: 50%;
    border: 1px soild #ddd;
  }
</style>
