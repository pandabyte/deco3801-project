import { observable, action } from 'mobx';
import _ from 'lodash';
import UserAuthApi from '../../api/UserAuthApi';

class AccountStore {

    @observable details = {
        email: 'min9@hotmail.com',
        username: 'min9@hotmail.com',
        password: 'min9',
        firstname: 'minh',
        lastname: 'nguyen',
        affiliation: '',
        position: ''
    }

    @observable auth = {
        access: '',
        refresh: '',
        userId: ''
    }


    @observable visible = false;
    @observable isLoggedIn = false;

    /* Clear account detail values and auth values */
    @action
    clear = () => {
        // this.details = _.mapValues(this.details, () => '');
        // this.auth = _.mapValues(this.auth, () => '');
    }

    @action
    onSignout = () => {
        // clear auth
        // clear user details
        // clear local storage
    }

    @action
    onSignin = () => {
    }

    /* Set key value for auth */

    @action
    setAuthKeyValue = (key, value) => {
        console.log(`Setting auth key: ${key} to value: ${value}`);
        this.auth[key] = value;
    }

    /* Set key value for details */
    @action
    setDetailsKeyValue = (key, value) => {
        console.log(`Setting details key: ${key} to value: ${value}`);
        this.details[key] = value;
    }
}

export default new AccountStore();