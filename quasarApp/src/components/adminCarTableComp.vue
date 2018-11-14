<template>
  <div>
    <a-input-search placeholder="input search text" @search="addCarList" size="large" v-model="inputVal">
      <a-button slot="enterButton">추가</a-button>
    </a-input-search>
    <a-table :columns="columns"
      :rowKey="record => record.index"
      :dataSource="carList"
      :loading="loading"
      @change="handleTableChange"
    >
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
  title: '차량이름',
  dataIndex: 'carName',
  width: 'auto',
},
{ title: 'action',
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
        carList: 'database/getCarList'
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
      this.$store.dispatch('database/getCarList',()=>{
        vueObj.loading = false;
      });
    },
    addCarList () {
      if(this.inputVal == ''){
        return false;
      }
      this.$store.dispatch('database/addCarList',this.inputVal);
      this.inputVal = '';
    },
    removeCar(index){
      var vueObj = this;
      console.log(vueObj.carList[index]);
      this.$store.dispatch('database/removeCarList',vueObj.carList[index]);
    }
  }
};
</script>



<style lang="scss" scoped>

  .ant-input-search{
    margin-bottom: 20px;
  }
  .ant-table-tbody{
    display: none;
  }
</style>
