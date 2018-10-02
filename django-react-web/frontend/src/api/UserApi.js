

// import dependencies
import axios from 'axios';


const baseUrl = '/api/v1';

class UserApi {

    /* Create user */

    create = () => { }

    /* Get user */
    read = () => {
        var token = localStorage.getItem('access');
        return axios.get(baseUrl + '/userprofile/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }
        );
    }

    /* Update user */
    update = (data) => {
        var token = localStorage.getItem('access');

        var updatedUser = {
            email: data.email,
            username: data.email,
            //password: data.password, we dont get this from the return value on sign in?
            first_name: data.first,
            last_name: data.last,
        }

        return axios.post(baseUrl + '/userprofile/update', updatedUser,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }
        );
    }






    /* Get all users */
    readAll = () => {
        var token = localStorage.getItem('access');
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


/* 
    get = (url) => {
        return axios.get(baseUrl + url)
            .catch(err => alert(err))
            .then(res => alert(res.data.message))
    }

    post = (url, data) => {
        return axios.post(baseUrl + url, data)
            .catch(err => alert(err))
            .then(res => console.log(res.data));
    }

    put = (url, data) => {
        return axios.post(baseUrl + url, data)
            .catch(err => alert(err))
            .then(res => console.log(res.data));
    }

    delete = (url) => {
        return axios.delete(baseUrl + url)
            .catch(err => alert(err))
            .then(res => console.log(res.data));

    }*/