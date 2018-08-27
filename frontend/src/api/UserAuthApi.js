// import dependencies
import axios from 'axios';

import AppStore from '../AppStore';


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
        AppStore.clearCredentials();
        
        return axios.post('/api/auth/token/obtain/',
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


/*  create new user
pipenv shell
. set_test_scecret.sh   // sets secret key
python manage.py createsuperuser
    enter details
*/