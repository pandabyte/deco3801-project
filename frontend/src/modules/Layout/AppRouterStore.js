import { observable } from 'mobx';

class AppRouterStore {
    @observable username = "";
    @observable password = "";
    @observable activeTab = "";

    setup = () => {
        this.username = "minh";
        this.password = "minh";
    }

    reset = () => {
        this.username = "";
        this.password = "";
    }

    credentials(){
        return this.username + " " + this.password;
    }
}

export default new AppRouterStore();