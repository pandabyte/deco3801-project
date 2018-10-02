import { observable, action } from 'mobx';
import Mock from './Mock';

class HrmsInstrumentStore {

    @observable instruments = [];

    @observable newInstrument = {
        brand: '',
        model: '',
        class: '',
        sources: ''
    }

    @action
    setup = () => {
        this.instruments = [
            {
                brand: 'brand1',
                model: 'brand1',
                class: 'brand1',
                sources: 'brand1'
            },
            {
                brand: 'brand2',
                model: 'brand2',
                class: 'brand2',
                sources: 'brand2'
            }
        ]
    }

    @action
    updateNewInstrumentKeyValue = (key, value) => {
        this.newInstrument[key] = value;
    }

}

export default new HrmsInstrumentStore();