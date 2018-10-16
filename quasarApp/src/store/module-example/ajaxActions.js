import axios from 'axios'
export default () => {
  return {
    selectTable (state,tableName,fields,whereStr, cSuccess, cError) {
      var tableName = tableName;
      var apiURL = `http://localhost:7000/selectTable`;
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
    }
  }
}
