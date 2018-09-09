import { observable, action } from 'mobx';

class ChemicalSearchStore {
    /* Configurations to track stage progress */
    @observable isLoading = false;
    @observable results = [];
    @observable value = [];

    @action
    setup = () => {
        /* TODO: pull data from database */

        /* TODO: add mock data in the mean time */
    }

    clear = () => {
        this.isLoading = false;
        this.results = [];
        this.value = '';
    }

    updateValue = (value) => {
        this.isLoading = true;
        this.value = value;
    }
}

export default new ChemicalSearchStore();