import { observable, action } from 'mobx';

class UserAuthStore {
    @observable isRegistered = true;

    @observable credentials = {
        email: '',
        password: ''
    }

    @observable isLoggedIn = false;
    @observable userID = '';

    setup = () => {
        this.isRegistered = true;
    }
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
    @action
    toggleForm = () => {
        this.isRegistered = !this.isRegistered;
    }
}

export default new UserAuthStore();