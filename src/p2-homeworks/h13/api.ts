import axios from "axios";

export let RESPONSE = ''

const instance = axios.create({
  baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestsAPI = {
  postRequest(checkboxValue: boolean) {
    return instance
      .post(`auth/test`, { success: checkboxValue })
      .then(response => {
        console.log({...response})
        console.log(response.data.errorText)
        RESPONSE = response.data.errorText
      })
      .catch(error => {
        console.log({...error})
        console.log(error.response ? error.response.data.errorText : error.message)
        RESPONSE = error.response ? error.response.data.errorText : error.message
      }) 
  }
}