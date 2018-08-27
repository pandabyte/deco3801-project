// import dependencies
import axios from 'axios';

import AppStore from '../AppStore';
const baseUrl = 'http://localhost:8000';


class UserAuthApi {

    getUserId = () => {
        var token = localStorage.getItem('token');

        return axios.get(baseUrl + '/api/v1/userid/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

    }

    login = (credentials) => {
        var email = credentials.email;
        var password = credentials.password;
        console.log('email ' + email + ' Password ' + password);
        AppStore.clearCredentials();
        
        return axios.post(baseUrl + '/api/auth/token/obtain/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
    }
}

export default new UserAuthApi();