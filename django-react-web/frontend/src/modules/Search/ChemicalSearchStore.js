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
}

export default new ChemicalSearchStore();