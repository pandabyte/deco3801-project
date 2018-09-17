// import dependencies
import axios from 'axios';

import UserAuthStore from '../modules/Home/UserAuthStore';

const REGISTRATION_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

class UserAuthApi {

    register = (data) => {
        console.log("register");

        return axios.post('/api/v1/register/',
            {
                email: 'minh@hotmail.com',
                first_name: 'minh',
                last_name: 'last name',
                password: 'asdfasdfasdf',
                username: 'minh@hotmail.com'
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );
    }

    getUserId = () => {
        var token = localStorage.getItem('token');
        console.log('user auth api', token);

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
