import { observable, action } from 'mobx';
import files from './Constants/files';

class ProcessStore {
    /* Configurations to track stage progress */
    @observable data = {
        configuration: {
            activeStage: 'Upload',
            componentView: ''
        },
        upload: {
            files: []
        },
        sample: {
            location: '',
            type: '',
            date: ''
        },
        acquisition: {},
        result: {}
    };

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
            instructions: [
                `1. Choose a predefined High Resolution Mass Spectrometry (HRMS)`,
                `2. Choose a predefined Chromatopgraphy System`
            ]

        },
        {
            name: 'Configuration',
            icon: 'adjust',
            instructions: [
                `1. Intruction one`,
                `2. Intrution two`,
                `3. Intrution two`
            ]
        },
        {
            name: 'Process',
            icon: 'google play',
            instructions: [
                `1. Intruction one`,
                `2. Intrution two`,
                `3. Intrution two`
            ]
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


    @observable results = {
        sampleId: 'sampleid',
        datasetId: 'datasetid',
        acquisitionMsId: 'acquisitionMsId',
        acquisitionLcId: 'acquisition:cId',
        columnId: 'columnId',
        deconvFilePath: 'deconvFilePath'
    }

    /* Set up initial states */
    @action
    setup = () => { }

    /* Set key value for configuration */
    @action
    updateConfigurationKeyValue = (key, value) => { }

    /* Set key value for selected files */
    @action
    setSelectedFiles = (files) => { }

    /* Set key value for sample */
    @action
    setSample = (location, type, date) => { }

    // TODO: swap to above
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