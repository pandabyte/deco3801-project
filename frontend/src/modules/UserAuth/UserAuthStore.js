import { observable, action } from 'mobx';

class UserAuthStore {
    @observable credentials = {
        email: '',
        password: ''
    }

    @observable isLoggedIn = false;
    @observable userID = '';

    @action
    updateProperty = (key, value) => {
        this.credentials[key] = value;
    }

    @action
    clearCredentials = () => {
        this.credentials = {
            email: '',
            password: ''
        }
    }

}

export default new UserAuthStore();