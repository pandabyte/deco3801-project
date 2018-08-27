import { observable, action, computed } from 'mobx';

class AppStore {
    @observable credentials = {
        email: '',
        password: ''
    }

    @observable isLoggedIn = false;
    @observable userID = '';

    @action
    setup = () => {
    }

    @action
    reset = () => {
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
}

export default new AppStore();