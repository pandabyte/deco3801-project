import { observable, action, computed } from 'mobx';

class AppRouterStore {
    @observable username = '';
    @observable password = '';
    @observable activeTab = '';

    @action
    setup = () => {
        this.username = "minh";
        this.password = "minh";
        this.activeTab = 'home';
    }

    @action
    reset = () => {
        this.username = "";
        this.password = "";
        this.activeTab = 'home';
    }

    @action
    handleTabClick = (e, { name }) => {
        this.activeTab = name;
        console.log(this.activeTab)
    }

    @computed get
    credentials() {
        return this.username + " " + this.password;
    }
}

export default new AppRouterStore();