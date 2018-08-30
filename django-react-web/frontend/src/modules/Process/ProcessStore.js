import { observable, action } from 'mobx';

class ProcessStore {
    /* Configurations to track stage progress */
    @observable config = {
        stage: '',
        isSingleFile: true,
    };

    /* Component to be rendered */
    @observable component = {}

    @observable selectedFile = '';

    @action
    setup = () => {
        console.log('Setting up Process fields');
        this.config['stage'] = 'upload';
        this.config['isSingleFile'] = true;
    }

    @action
    updateProperty = (key, value) => {
        this.config[key] = value;
    }

    @action
    updateSelectedFile = (file) => {
        this.selectedFile = file;
    }


}

export default new ProcessStore();