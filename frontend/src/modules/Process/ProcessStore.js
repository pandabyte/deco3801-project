import { observable, action } from 'mobx';

class ProcessStore {
    @observable config = '';

    @action
    setup = () => {
        this.activeTab = 'home';
    }

    @action
    reset = () => {
        this.activeTab = 'home';
    }

    @action
    handleTabClick = (e, { name }) => {
        this.activeTab = name;
    }
}

export default new ProcessStore();