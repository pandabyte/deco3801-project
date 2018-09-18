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
    updateFormProperty = (key, value) => {
        this.form[key] = value;
    }

}

export default new HelpStore();