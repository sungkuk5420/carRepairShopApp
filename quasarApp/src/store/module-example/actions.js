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


export function kakaoLoginAjax(_,pramas) {
  var state = this.state;
  ajaxActions().kakaoLoginAjax(
    state,
    (results) => {
      console.log('action / kakaoLoginAjax / success')
      console.log('results= ', results)
    },
    (res) => {
      console.log('action / kakaoLoginAjax / error', res)
      console.log('err= ', res)
      // commit(M.CHANGE_SEARCH_RESULTS)
    }
  )
}



