import firebase from 'firebase';
import ajaxActions from './ajaxActions';
import firebaseDataKey from '../../secret';
console.log(firebaseDataKey);
var config = {
  databaseURL: firebaseDataKey.firebaseKey,
}
var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();

export function selectTable(_,pramas) {
    var thisObj = this;
    var tableName = pramas.tableName;
    var fields = pramas.fields;
    var whereStr = pramas.whereStr;
    console.log('selectTable start');
    console.log(pramas);
    ajaxActions().selectTable(
      this.state,
      tableName,
      fields,
      whereStr,
      (results) => {
        console.log('action / selectTable / success');
        console.log('results= ', results);
        if(results.data.length == 0){
          if(pramas.cb){
            pramas.cb('no User');
          }
        }else{
          if(pramas.cb){
            pramas.cb(results.data);
          }
        }
        // commit(M.CHANGE_USER_DATA, results)
      },
      (res) => {
        console.log('action / selectTable / error', res)

        if(pramas.cb){
          pramas.cb('error');
        }
        if (res === 500) {
          // thisObj.dispatch(M.SHOW_TOAST)
        }
        else {
          // location.href = `${res}`
        }
      }
    )
}

export function insertUser(_,pramas) {
  var thisObj = this;
  console.log(pramas);
  ajaxActions().insertUser(
    this.state,
    pramas.id,
    pramas.car_number,
    pramas.password,
    pramas.phone_number,
    pramas.user_name,
    pramas.car_type,
    pramas.car_km,
    pramas.thumbnail_image,
    pramas.profile_image,
    pramas.user_level,
    pramas.login_type,
    (results) => {
      console.log('action / insertUser / success')
      console.log('results= ', results);
      if(results.data.affectedRows != 0){
        if(pramas.cb){
          pramas.cb('success');
        }
      }else{
        if(pramas.cb){
          pramas.cb('error');
        }
      }
      // commit(M.CHANGE_USER_DATA, results)
    },
    (res) => {
      if(pramas.cb){
        pramas.cb('error');
      }
      if (res === 500) {
        // thisObj.dispatch(M.SHOW_TOAST)
      }
      else {
        // location.href = `${res}`
      }
    }
  )
}

export function setUsersInfo(_,pramas) {
  console.log('setUsersInfo',pramas);
  var thisObj = this;

  if(pramas.carNumber){
    thisObj.state.database.loginInfo.carNumber = pramas.carNumber;
  }
  if(pramas.phoneNumber){
    thisObj.state.database.loginInfo.phoneNumber = pramas.phoneNumber;
  }
  if(pramas.userName){
    thisObj.state.database.loginInfo.userName = pramas.userName;
  }
  if(pramas.carType){
    thisObj.state.database.loginInfo.carType = pramas.carType;
  }
  if(pramas.carKm){
    thisObj.state.database.loginInfo.carKm = pramas.carKm;
  }
  if(pramas.userLevel){
    thisObj.state.database.loginInfo.userLevel = pramas.userLevel;
  }
  if(pramas.thumbnailImage){
    thisObj.state.database.loginInfo.thumbnailImage = pramas.thumbnailImage;
  }
  if(pramas.profileImage){
    thisObj.state.database.loginInfo.profileImage = pramas.profileImage;
  }
  if(pramas.loginType){
    thisObj.state.database.loginInfo.loginType = pramas.loginType;
  }

  thisObj.state.database.loginInfo.loginState = true;
}

export function setLocalStorage(_,vueObj) {
  vueObj.$session.set('loginInfo',this.state.database.loginInfo);
}

export function logout(_,vueObj) {
  var thisObj = this;
  if(this.state.database.loginInfo.loginType == "kakao"){
    Kakao.Auth.logout();
  }
  thisObj.state.database.loginInfo = {
    carNumber:'',
    phoneNumber:'',
    userName:'',
    carType:'',
    carKm:'',
    userLevel:'',
    thumbnailImage:'',
    profileImage:'',
    loginType:'',
    loginState: false
  };
  vueObj.$session.set('loginInfo',undefined);
}

export function getCarList(_,cb) {
  console.log('getCarList');
    var thisObj = this;
    db.ref('/carList').on('value', function (data) {
      var database = data.val();
      console.log(database);
      if(database == null){
        thisObj.state.database.carList = [];
        if(cb){
          cb();
        }
        return false;
      }
      var carListDataRef = Object.keys(database).map(function(carListData) {
          return {
              id : carListData,
              info :database[carListData]
          };
      });
      thisObj.state.database.carList = carListDataRef;
      if(cb){
        cb();
      }
    });
}

export function addCarList(_,carName) {
  console.log('addCarList');
    var thisObj = this;
    console.log(carName);
    db.ref('carList/').push({
      carName: carName,
      addTime: Date.now()
    });
}

export function removeCarList(_,originalData) {
  console.log('addCarList');
    var thisObj = this;
    console.log(originalData);
    db.ref(`carList/${originalData.id}/`).remove()
    .then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
}
