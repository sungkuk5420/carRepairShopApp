<template>
  <div>
    <!-- <a-input-search placeholder="input search text" @search="searchUser" size="large" v-model="inputVal"> -->
      <!-- <a-button slot="enterButton">추가</a-button> -->
    <!-- </a-input-search> -->
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
    <template  slot="action" slot-scope="text, record, index">
      <a-button type="primary" @click="showModal(index)">수정</a-button>
    </template>
    </a-table>
    <a-modal
      title="유저 정보 수정"
      v-model="modalVisible"
    >
      <template slot="footer">
        <a-popconfirm title="정말로 이 유저를 삭제하시겠습니까?" @confirm="deleteUser" @cancel="confirmCancel" okText="삭제" cancelText="취소">
          <a-button key="delete" type="danger">삭제</a-button>
        </a-popconfirm>
        <a-button key="back" @click="handleCancel">취소</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="changeUserSubmit">
          확인
        </a-button>
      </template>
      <div class="row-div popup">
        <div class="profile-div">
          <img v-bind:src="changeUserInfo.thumbnail_image == null? '../assets/images/default-user-image.jpg': changeUserInfo.thumbnail_image" alt="">
        </div>
        <div class="content-div">
          <div v-if="changeUserInfo.login_type != 'kakao'" class="components-input-demo-presuffix">
            <a-input placeholder="차량 번호" v-model="changeUserInfo.car_number" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div v-if="changeUserInfo.login_type != 'kakao'" class="components-input-demo-presuffix">
            <a-input placeholder="비밀 번호" v-model="changeUserInfo.password" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix">
            <a-input placeholder="폰 번호" v-model="changeUserInfo.phone_number" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix">
            <a-input placeholder="이름" v-model="changeUserInfo.user_name" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix">
            <a-input placeholder="차종" v-model="changeUserInfo.car_type" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix">
            <a-input placeholder="주행 거리" v-model="changeUserInfo.car_km" ref="userNameInput">
              <a-icon slot="prefix" type="user" />
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
          <div class="components-input-demo-presuffix">
            <span class="label">유저 등급</span>
            <a-select v-model="changeUserInfo.user_level" defaultValue="public" style="width: 120px" @change="handleChange">
              <a-select-option value="일반">일반</a-select-option>
              <a-select-option value="실버">실버</a-select-option>
              <a-select-option value="골드">골드</a-select-option>
              <a-select-option value="다이야">다이야</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </a-modal>
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
  title: '비밀번호',
  dataIndex: 'password',
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
{ title: '수정',
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
      inputVal:'',
      modalVisible: false,
      changeUserInfo: {
        id : '',
        car_number : '',
        password : '',
        phone_number : '',
        user_name : '',
        car_type : '',
        car_km : '',
        user_level : '',
        thumbnail_image : '',
        profile_image : '',
        login_type : '',
      }
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
            fields:'id,password,car_number,phone_number,user_name,car_type,car_km,user_level,thumbnail_image,profile_image,login_type',
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

    },
    showModal (index) {
      console.log(index);
      var index = index+1;
      let currentUser = this.userList.filter((item)=>{return item.index == index})[0];
      console.log(currentUser);
      this.changeUserInfo = [currentUser].map((user)=>{
        return {
          'id' :user.id,
          'car_number' :user.car_number,
          'password' :user.password,
          'phone_number' :user.phone_number,
          'user_name' :user.user_name,
          'car_type' :user.car_type,
          'car_km' :user.car_km,
          'user_level' :user.user_level,
          'thumbnail_image' :user.thumbnail_image,
          'profile_image' :user.profile_image,
          'login_type' :user.login_type,
        }
      })[0];
      console.log('changeUserInfo',this.changeUserInfo);
      this.modalVisible = true;
    },
    handleChange () {
      this.modalVisible = false;
    },
    handleCancel () {
      this.modalVisible = false;
    },
    changeUserSubmit () {
      // this.modalVisible = false;
      var vueObj = this;
      if(vueObj.changeUserInfo.password == null){
        alert('password는 공백으로 변경할 수 없습니다.');
        return false;
      }
      vueObj.$store.dispatch('database/updateUser',{
        'id' : vueObj.changeUserInfo.id,
        'car_number' : vueObj.changeUserInfo.car_number == null ? '' : vueObj.changeUserInfo.car_number,
        'password' : vueObj.changeUserInfo.password == null ? '' : vueObj.changeUserInfo.password,
        'phone_number' : vueObj.changeUserInfo.phone_number == null ? '' : vueObj.changeUserInfo.phone_number,
        'user_name' : vueObj.changeUserInfo.user_name == null ? '' : vueObj.changeUserInfo.user_name,
        'car_type' : vueObj.changeUserInfo.car_type == null ? '' : vueObj.changeUserInfo.car_type,
        'car_km' : vueObj.changeUserInfo.car_km == null ? '' : vueObj.changeUserInfo.car_km,
        'thumbnail_image' : vueObj.changeUserInfo.thumbnail_image == null ? null : vueObj.changeUserInfo.thumbnail_image,
        'profile_image' : vueObj.changeUserInfo.profile_image == null ? null : vueObj.changeUserInfo.profile_image,
        'user_level' : vueObj.changeUserInfo.user_level == null ? '' : vueObj.changeUserInfo.user_level,
        'login_type' : vueObj.changeUserInfo.login_type == null ? '' : vueObj.changeUserInfo.login_type,
        cb:(data)=>{
          if(data == 'success'){
            vueObj.$message.success('변경이 완료 되었습니다.');
            var userList = vueObj.userList.slice(0);
            var changeIndex = -1;
            for (let i = 0; i < userList.length; i++) {
              var currentUser = userList[i];
              if(currentUser.id === vueObj.changeUserInfo.id){
                changeIndex = i;
              }
            }
            userList[changeIndex] = vueObj.changeUserInfo;
            let users = userList;
            vueObj.$store.dispatch('database/setUsers',{
              vueObj,
              users
            });
            setTimeout(()=>{vueObj.modalVisible = false;},1000);
          }else{
            alert('error');
          }
        }
      });
    },
    deleteUser (e) {
      console.log(this.changeUserInfo);

      var vueObj = this;
      var changeUserId = this.changeUserInfo.id;
      var deleteUser = this.userList.filter((currentUser)=> {return currentUser.id == changeUserId})[0];
      console.log(deleteUser);

      this.$store.dispatch('database/deleteUser',{
        'id' : deleteUser.id,
        cb:(data)=>{
          if(data == 'success'){
            console.log(data);
            this.$message.success('삭제가 완료 되었습니다.');
            let users = vueObj.userList.filter((currentUser)=> {return currentUser.id != changeUserId});

            vueObj.$store.dispatch('database/setUsers',{
              vueObj,
              users
            });
            setTimeout(()=>{vueObj.modalVisible = false;},1000);
          }else{
            alert('error');
            this.$message.error('삭제 실패.');
          }
        }
      });
    },
    confirmCancel (e) {
      console.log(e)
      this.$message.error('취소')
    }
  }
};
</script>




<style lang="scss">
  .ant-layout-content{
    overflow: auto;
  }

  .row-div{
    display: flex;
    flex: 0 0 auto;
  }

  .ant-modal{
    height:50%;
    width: 450px;
    min-height: 500px;
    .ant-modal-content{
      display: flex;
      flex-direction: column;
      .ant-modal-header{
        height: 55px;
      }
      .ant-modal-body{
        .components-input-demo-presuffix{
          margin: 10px 0;
          &:first-child{
            margin: 0;
          }
        }
      }
      .ant-modal-footer{
        height: 55px;
      }
    }

    .label{
      margin: 0 10px;
    }
  }

  .popup{
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    .profile-div{
      width: 30%;
      img{
        width: 100%;
        height: auto;
      }
    }
    .content-div{
      width: 70%;
      padding: 0 10px;
    }
  }

  .ant-select-selection--single,
  .ant-select-dropdown{
    width: 180px;
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
