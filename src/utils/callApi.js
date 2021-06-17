import axios from 'axios';
//mock API
let API_URL = 'https://60c4cc6fec8ef800175e08b1.mockapi.io/api/v1';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
