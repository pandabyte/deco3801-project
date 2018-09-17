// import dependencies
import axios from 'axios';

import UserAuthStore from '../modules/Home/UserAuthStore';

const HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
class UserAuthApi {

    /* Get tokens */
    login = (credentials) => {
        console.log('Email ' + credentials.email);
        console.log('Password ' + credentials.password);

        return axios.post('/api/token/obtain/', credentials,
            {
                headers: HEADER
            }
        );
    }

    /* Get user ID from given token */
    getUserID = () => {
        var token = localStorage.getItem('access');
        return axios.get('/api/v1/userid/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }
        );
    }

    register = (data) => {
        var token = localStorage.getItem('access');
        console.log('Signing up with the following\n', JSON.stringify(data));

        return axios.post('/api/v1/register/', data,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    }


}

export default new UserAuthApi();
