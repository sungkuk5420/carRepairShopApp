import axios from 'axios'
export default () => {
  return {
    kakaoLoginAjax (state, cSuccess, cError) {
      let options = {
        apikey: 'AIzaSyBTH4AgSAIAoyXu8XwzkKlsLdVuJxMPS0Q',
        encoded: encodeURI(state.searchStr),
        url () {
          let apiURL = ''
          // apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${state.loadingNum}&key=${options.apikey}`
          apiURL = `http://13.125.125.39:7000/auth/login/kakao`
          console.log(apiURL)
          return apiURL
        }
      }
      let api = axios.create()
      // console.log('url= ', options.url())
      axios.all(
        [
          api.get(options.url())
        ]
      ).then(
        (responses) => {
          // console.log(responses)
          state.nextPageToken = responses[0].data.nextPageToken
          let errors = responses.filter((res) => {
            return res.status !== 200
          })
          if (errors.length < 1) {
            // console.log('200 response= ', responses[0])
            cSuccess(responses[0])
          }
          else {
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
