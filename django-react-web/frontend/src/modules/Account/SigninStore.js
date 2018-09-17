import { observable, action } from 'mobx';

class SigninStore {

    @observable credentials = {
        email: '',
        username: '',
        password: '',
        firstname: '',
        lastname: ''
    }
    @observable informations = {
        affiliation: '',
        position: ''
    }

    @observable isLoggedIn = false;
    @observable userID = '';


    @action
    updateCredentialProperty = (key, value) => {
        this.credentials[key] = value;
    }
    
    @action
    updateInformationProperty = (key, value) => {
        this.informations[key] = value;
    }
}

export default new SigninStore();