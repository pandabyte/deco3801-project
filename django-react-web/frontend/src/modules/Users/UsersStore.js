import { observable, action } from 'mobx';
import mock from './mock';
import UserApi from '../../api/UserApi';

class UsersStore {

    @observable users = [];

    /* Pull user from user database */
    @action
    setup = () => {
        UserApi.users().then(res => {
            const users = res.data;
            users.forEach(user => {
                this.users.push({
                    email: user.email,
                    firstname: user.first_name,
                    lastname: user.last_name,
                    position: user.position,
                    username: user.username
                });
            });
        }).catch(err => console.log(err));
    }
}


export default new UsersStore();