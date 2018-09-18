import { observable, action } from 'mobx';
import files from './Constants/files';

class ProcessStore {
    /* Configurations to track stage progress */
    @observable config = {
        stage: '',
        isSingleFile: true,
    };

    @observable activeStage = 'Upload';

    @observable stages = [
        {
            name: 'Upload',
            icon: 'upload',
            instructions: [
                `1. Click 'upload single file or 'upload multiple file`,
                `2. Select your files in the file explorer`,
                `3. Click next stage`
            ]
        },
        {
            name: 'Sample',
            icon: 'keyboard',
            instructions: [
                `1. Click 'add sample information' for manual entry or 'upload sample information'`,
                `2. Enter the required information or select the sample file from the file explorer`,
                `3. Click next stage`
            ]
        },
        {
            name: 'Acquisition',
            icon: 'setting',
            instructions: ['three']

        },
        {
            name: 'Configuration',
            icon: 'adjust',
            instructions: ['four']

        },
        {
            name: 'Process',
            icon: 'google play',
            instructions: ['five']
        }
    ];



    /* Component to be rendered */
    @observable component = {}

    /* Fields for upload stage */
    @observable selectedFiles = [];

    /* Fields for sample stage */
    @observable sampleLocation = '';
    @observable sampleType = '';
    @observable sampleDate = '';


    @action
    setup = () => {
        console.log('Setting up Process fields');
        this.config['stage'] = 'upload';
        this.config['isSingleFile'] = true;
        this.selectedFiles = files;
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