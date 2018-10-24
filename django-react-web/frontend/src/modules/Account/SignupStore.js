import { observable, action } from 'mobx';

class SignupStore {

    @observable credentials = {
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: ''
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