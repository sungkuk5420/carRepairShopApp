import axios from 'axios'
// var apiServer = 'http://localhost:7000/';
var apiServer = 'http://13.125.125.39:7000/';
export default () => {
  return {
    selectTable (state,tableName,fields,whereStr, cSuccess, cError) {
      var tableName = tableName;
      var apiURL = `${apiServer}selectTable`;
      let api = axios.create()
      axios.post(apiURL, {
        tableName,
        fields,
        whereStr
      }).then(
        (responses) => {
          console.log(responses);
          let errors = responses.status != 200 ? true : false;
          if (!errors) {
            console.log('200 response= ', responses)
            cSuccess(responses)
          }
          else {
            console.log(responses);
            let errmsgs = errors.reduce((memo = '', res) => {
              return memo + `${res.status} : ${res.message}\n`
            }, '')
            console.warn(errmsgs)
          }
        }
      )
    },

    insertUser (
      state,
      id,
      car_number,
      password,
      phone_number,
      user_name,
      car_type,
      car_km,
      thumbnail_image,
      profile_image,
      user_level,
      login_type,
      cSuccess,
      cError) {
      var tableName = tableName;
      var apiURL = `${apiServer}insertUser`;
      let api = axios.create()
      axios.post(apiURL, {
        id,
        car_number,
        password,
        phone_number,
        user_name,
        car_type,
        car_km,
        thumbnail_image,
        profile_image,
        user_level,
        login_type
      }).then(
        (responses) => {
          console.log(responses);
          let errors = responses.status != 200 ? true : false;
          if (!errors) {
            console.log('200 response= ', responses)
            cSuccess(responses)
          }
          else {
            console.log(responses);
            let errmsgs = errors.reduce((memo = '', res) => {
              return memo + `${res.status} : ${res.message}\n`
            }, '')
            console.warn(errmsgs)
          }
        }
      )
    }
  }
}
