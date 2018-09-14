// import dependencies
import axios from 'axios';

import UserAuthStore from '../modules/Home/UserAuthStore';


class UserAuthApi {

    getUserId = () => {
        var token = localStorage.getItem('token');
        console.log('user auth api',  token);

        return axios.get('/api/v1/userid/', {
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
        UserAuthStore.clearCredentials();
        
        return axios.post('/api/token/obtain/',
            {
                email: email,
                password: password
            },
            {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
            }
        );
    }
}

export default new UserAuthApi();
