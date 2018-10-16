import axios from 'axios'
export default () => {
  return {
    selectTable (state,tableName, cSuccess, cError) {
      var tableName = tableName;
      var apiURL = `http://13.125.125.39:7000/selectTable`;
      let api = axios.create({
        tableName
      })
      axios.post(apiURL, {
        tableName
      }).then(
        (responses) => {
          console.log(responses);
          let errors = responses.filter((res) => {
            return res.status !== 200
          })
          if (errors.length < 1) {
            console.log('200 response= ', responses[0])
            cSuccess(responses[0])
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
