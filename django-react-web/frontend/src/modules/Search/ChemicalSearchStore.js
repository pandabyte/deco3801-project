import { observable, action } from 'mobx';

class ChemicalSearchStore {
    /* Configurations to track stage progress */
    @observable isLoading = false;
    @observable results = [];
    
    


}

export default new ChemicalSearchStore();