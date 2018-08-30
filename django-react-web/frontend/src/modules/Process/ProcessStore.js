import { observable, action } from 'mobx';

class ProcessStore {
    /* Configurations to track stage progress */
    @observable config = {
        stage: '',
        isSingleFile: true,
    };

    /* Component to be rendered */
    @observable component = {}

    @observable selectedFiles = [];

    @action
    setup = () => {
        console.log('Setting up Process fields');
        this.config['stage'] = 'upload';
        this.config['isSingleFile'] = true;
        this.selectedFiles = {
            0: {
                name: 'name one',
                size: 'size one'
            },
            1: {
                name: 'name two',
                size: 'size two'
            }
        }
    }

    @action
    updateProperty = (key, value) => {
        this.config[key] = value;
    }

    @action
    updateSelectedFiles = (file) => {
        this.selectedFiles = file;
    }


}

export default new ProcessStore();