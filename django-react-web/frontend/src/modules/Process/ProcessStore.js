import { observable, action } from 'mobx';

class ProcessStore {
    @observable config = {
        stage: ''
    };
    @observable title = '';

    @action
    setup = () => {
        this.config['stage'] = 'Start configuration!';
        this.title = 'swag';
    }

    @action
    reset = () => {
    }

    @action
    updateProperty = (key, value) => {
        this.config[key] = value;
        console.log(this.config['stage']);

        this.title = 'test';
    }

}

export default new ProcessStore();