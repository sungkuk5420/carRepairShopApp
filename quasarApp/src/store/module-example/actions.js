import firebase from 'firebase';
import ajaxActions from './ajaxActions'

export function selectTable() {
    var thisObj = this;
    var tableName = 'users';
    console.log('selectTable start');
    console.log(ajaxActions);
    ajaxActions().selectTable(
      this.state,
      tableName,
      (results) => {
        console.log('action / selectTable / success')
        console.log('results= ', results)
        // commit(M.CHANGE_USER_DATA, results)
      },
      (res) => {
        console.log('action / selectTable / error', res)
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

  // console.log(thisObj.state.database.users);
  db.ref('user/').push({
    phoneNumber: pramas.phone,
    password: pramas.password,
    carType: pramas.carType,
    carYear: pramas.carYear,
    carKm: pramas.carKm,
    carRate: pramas.carRate
  });
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
  pramas.vueObj.$session.set('loginInfo',thisObj.state.database.loginInfo);
}

export function logout() {
  var thisObj = this;
  Kakao.Auth.logout();
  thisObj.state.database.loginInfo.loginState = false;
}


