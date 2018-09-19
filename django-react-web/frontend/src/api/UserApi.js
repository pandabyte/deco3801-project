

// import dependencies
import axios from 'axios';

class UserApi {

    /* Get user profile */
    user = (userID) => {
        var token = localStorage.getItem('access');

        return axios.get('/api/v1/userprofile/', userID,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }
        );
    }

    users = () => {
        var token = localStorage.getItem('access');
        console.log(' getting users api with token ', token);

        return axios.get('/api/v1/users/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }
        );
    }
}

export default new UserApi();