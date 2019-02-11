import axios from "axios";

const apiServer = "http://localhost:7000/";
// var apiServer = 'http://13.125.246.215:7000/';
export default () => ({
  selectTable(state, tableName, fields, whereStr, cSuccess, cError) {
    var tableName = tableName;
    const apiURL = `${apiServer}selectTable`;
    const api = axios.create();
    axios
      .post(apiURL, {
        tableName,
        fields,
        whereStr
      })
      .then(responses => {
        console.log(responses);
        const errors = responses.status != 200;
        if (!errors) {
          console.log("200 response= ", responses);
          cSuccess(responses);
        } else {
          console.log(responses);
          const errmsgs = errors.reduce(
            (memo = "", res) => `${memo}${res.status} : ${res.message}\n`,
            ""
          );
          console.warn(errmsgs);
        }
      });
  },

  insertUser(
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
    cError
  ) {
    var tableName = tableName;
    const apiURL = `${apiServer}insertUser`;
    const api = axios.create();
    axios
      .post(apiURL, {
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
      })
      .then(responses => {
        console.log(responses);
        const errors = responses.status != 200;
        if (!errors) {
          console.log("200 response= ", responses);
          cSuccess(responses);
        } else {
          console.log(responses);
          const errmsgs = errors.reduce(
            (memo = "", res) => `${memo}${res.status} : ${res.message}\n`,
            ""
          );
          console.warn(errmsgs);
        }
      });
  },
  updateUser(
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
    cError
  ) {
    var tableName = tableName;
    const apiURL = `${apiServer}updateUser`;
    const api = axios.create();
    axios
      .post(apiURL, {
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
      })
      .then(responses => {
        console.log(responses);
        const errors = responses.status != 200;
        if (!errors) {
          console.log("200 response= ", responses);
          cSuccess(responses);
        } else {
          console.log(responses);
          const errmsgs = errors.reduce(
            (memo = "", res) => `${memo}${res.status} : ${res.message}\n`,
            ""
          );
          console.warn(errmsgs);
        }
      });
  },

  deleteUser(state, id, cSuccess, cError) {
    const apiURL = `${apiServer}deleteUser`;
    const api = axios.create();
    axios
      .post(apiURL, {
        id
      })
      .then(responses => {
        console.log(responses);
        const errors = responses.status != 200;
        if (!errors) {
          console.log("200 response= ", responses);
          cSuccess(responses);
        } else {
          console.log(responses);
          const errmsgs = errors.reduce(
            (memo = "", res) => `${memo}${res.status} : ${res.message}\n`,
            ""
          );
          console.warn(errmsgs);
        }
      });
  }
});
