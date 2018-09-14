import { observable, action } from 'mobx';


class HelpStore {
    /* Configurations to track stage progress */
    @observable activeIndex = 0;

}

export default new HelpStore();