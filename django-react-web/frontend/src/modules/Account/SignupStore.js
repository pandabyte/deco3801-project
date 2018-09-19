import { observable, action } from 'mobx';

class SignupStore {

    @observable credentials = {
        email: 'min9@hotmail.com',
        username: 'min9@hotmail.com',
        password: 'min9',
        firstname: 'minh',
        lastname: 'nguyen'
    }

    @observable visible = false;
    @observable message = '';


    @observable informations = {
        affiliation: '',
        position: ''
    }

    @observable isLoggedIn = false;

    @action
    setMessage = (text) => {
        this.message = text;
        this.visible = true;
    }

    clearMessage = () => {
        this.message = '';
        this.visible = false;
    }

    @action
    updateCredentialProperty = (key, value) => {
        this.credentials[key] = value;
    }

    @action
    updateInformationProperty = (key, value) => {
        this.informations[key] = value;
    }
}

export default new SignupStore();