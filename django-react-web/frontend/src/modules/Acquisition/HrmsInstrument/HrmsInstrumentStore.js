import { observable, action } from 'mobx';
import Mock from './Mock';

class HrmsInstrumentStore {

    @observable instruments = [];

    @observable newInstrument = {
        brand: '',
        model: '',
        sources: ''
    }

    @action
    clearNewInstrument = () => {
        this.newInstrument = {
            brand: '',
            model: '',
            sources: ''
        }
    }

    @action
    setup = () => {
        this.instruments = Mock.instruments.slice();
        this.clearNewInstrument();
    }

    @action
    updateNewInstrumentKeyValue = (key, value) => {
        this.newInstrument[key] = value;
    }

}

export default new HrmsInstrumentStore();