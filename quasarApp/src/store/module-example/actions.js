import firebase from 'firebase';
import ajaxActions from './ajaxActions'

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
    pramas.car_number,
    pramas.password,
    pramas.phone_number,
    pramas.user_name,
    pramas.car_type,
    pramas.car_km,
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
  if(pramas.thumbnailImage){
    thisObj.state.database.loginInfo.thumbnailImage = pramas.thumbnailImage;
  }
  if(pramas.profileImage){
    thisObj.state.database.loginInfo.profileImage = pramas.profileImage;
  }
  if(pramas.userName){
    thisObj.state.database.loginInfo.userName = pramas.userName;
  }

  thisObj.state.database.loginInfo.loginState = true;
}

export function setLocalStorage(_,vueObj) {
  vueObj.$session.set('loginInfo',this.state.database.loginInfo);
}

export function logout(_,vueObj) {
  var thisObj = this;
  Kakao.Auth.logout();
  thisObj.state.database.loginInfo.loginState = false;
  vueObj.$session.set('loginInfo',undefined);
}


