import { observable, action } from 'mobx';

class SigninStore {

    @observable credentials = {
        email: '',
        password: ''
    }
    @observable tokens = {
        refresh: '',
        access: ''
    }

    @observable userID = '';

    @observable errorVisible = false;
    @observable errorMessage = '';

    @action
    handleSignout = () => {
        this.credentials = {
            email: '',
            password: ''
        }
        this.tokens = {
            refresh: '',
            access: ''
        }
        this.userID = '';
        localStorage.removeItem('refresh');
        localStorage.removeItem('access');
    }
    @action 
    setUserID = (value) => {
        this.userID = value;
        console.log("setting user ID to " + value);
    }

    @action
    updateTokenProperty = (key, value) => {
        this.tokens[key] = value;
    }

    @action
    updateCredentialProperty = (key, value) => {
        this.credentials[key] = value;
    }

    @action
    setErrorMessage = (text) => {
        console.log(text);
        this.errorMessage = text;
        this.errorVisible = true;
        console.log(this.errorVisible);
    }

    @action
    clearErrorMessage = () => {
        this.errorMessage = '';
        this.errorVisible = false;
    }
}

export default new SigninStore();