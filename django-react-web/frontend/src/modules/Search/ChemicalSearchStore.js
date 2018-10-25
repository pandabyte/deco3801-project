import { observable, action } from 'mobx';

class ChemicalSearchStore {

    /* Configurations to track stage progress */
    @observable state = {
        isLoading: false,
        results: [],
        value: ''
    }
    
    @observable isFluid = false;

    @action
    setup = () => {}

    /* Clear search states*/
    clear = () => {
        this.state = {
            isLoading: false,
            results: [],
            value: ''
        }
    }

    /* Set key value pair for search states */
    updateStateKeyValue = (key, value) => {
        this.state[key] = value;
    }
}

export default new ChemicalSearchStore();