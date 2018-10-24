import axios from 'axios';

/* Reusable header */
const HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}
class UserAuthApi {

    /* Get tokens */
    login = (credentials) => {
        const { email, password } = credentials;

        if (email === undefined || password === undefined) { return; }

        return axios.post('/api/token/obtain/', credentials, { headers: HEADER });
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
        var newData = {
            email: data.email,
            username: data.email,
            password: data.password,
            first_name: data.firstname,
            last_name: data.lastname,
        }

        return axios.post('/api/v1/register/', newData, { headers: HEADER });
    }

    verifyToken = () => {
        return axios.post('/api/token/verify/', { "token": localStorage.getItem('access') },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                }
            }
        );
    }
}

export default new UserAuthApi();
