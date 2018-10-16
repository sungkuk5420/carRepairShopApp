import firebase from 'firebase';
import ajaxActions from './ajaxActions'

var config = {
  databaseURL: 'https://carrepairshop-f398e.firebaseio.com',
}
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()
export function setUsersRef() {
    var thisObj = this;
    db.ref('/user').on('value', function (data) {
      var database = data.val();
      var userDataRef = Object.keys(database).map(function(userData) {
          return {
              id : userData,
              info :database[userData]
          };
      });
      thisObj.state.database.users = userDataRef;
    });
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


