import { observable, action } from 'mobx';

class ProcessStore {
    @observable config = {
        stage: ''
    };

    @observable component = {}

    @action
    setup = () => {
        console.log('Setting up Process fields');
        this.config['stage'] = 'upload';
    }

    @action
    updateProperty = (key, value) => {
        this.config[key] = value;
    }

}

export default new ProcessStore();