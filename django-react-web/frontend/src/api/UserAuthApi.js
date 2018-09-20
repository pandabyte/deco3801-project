// import dependencies
import axios from 'axios';

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
        console.log('Signing up with the following\n', JSON.stringify(data));

        var newData = {
            email: data.email,
            username: data.email,
            password: data.password,
            first_name: data.firstname,
            last_name: data.lastname,
        }

        return axios.post('/api/v1/register/', newData,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
    }


}

export default new UserAuthApi();
