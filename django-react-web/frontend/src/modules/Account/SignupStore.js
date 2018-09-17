import { observable, action } from 'mobx';

class SignupStore {

    @observable credentials = {
        email: 'min9@hotmail.com',
        username: 'min9@hotmail.com',
        password: 'min9',
        firstname: 'minh',
        lastname: 'nguyen'
    }
    
    @observable informations = {
        affiliation: '',
        position: ''
    }

    @observable isLoggedIn = false;

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