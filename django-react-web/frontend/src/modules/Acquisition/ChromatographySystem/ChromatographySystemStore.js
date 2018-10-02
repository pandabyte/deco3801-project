import { observable, action } from 'mobx';
import Mock from './Mock';

class ChromatographySystemStore {

    @observable systems = [];

    @observable newSystem = {};

    @action
    setup = () => {
        this.systems = [
            {
                brand: 'brand1',
                class: 'brand1'
            },
            {
                brand: 'brand2',
                class: 'brand2'
            }
        ]
    }

    @action
    updateNewSystemKeyValue = (key, value) => {
        this.newSystem[key] = value;
    }

}

export default new ChromatographySystemStore();