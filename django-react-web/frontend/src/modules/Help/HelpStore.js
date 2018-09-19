import { observable, action } from 'mobx';


class HelpStore {
    /* Configurations to track stage progress */
    @observable activeIndex = 0;
    @observable form = {
        firstname: '',
        lastname: '',
        email: '',
        text: ''
    }

    @action
    clear = () => {
        this.form = {
            firstname: '',
            lastname: '',
            email: '',
            text: ''
        }
    }

    @action
    updateFormProperty = (key, value) => {
        console.log(JSON.stringify(this.form));
        this.form[key] = value;
    }

}

export default new HelpStore();