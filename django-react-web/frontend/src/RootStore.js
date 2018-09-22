import { observable, action } from 'mobx';
import UserAuthApi from './api/UserAuthApi';

class RootStore {

    @observable token = localStorage.getItem('access');

    @observable tokenVerified = false;

    @observable authLevel = 0;

    /* Pull user from user database */
    @action
    verifyToken = () => {
        UserAuthApi.verifyToken().then(res => {
            this.tokenVerified = true;
            // TODO Need to set Authlevel
        }).catch(err => {
            this.tokenVerified = false;
            this.authLevel = 0;
        });
    }

}


export default new RootStore();