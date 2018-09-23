import { observable, action } from 'mobx';
import mock from './mock';
import UserApi from '../../api/UserApi';

class UsersStore {

    @observable users = [];

    @observable loading = true;

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
            this.setLoading(false);
        }).catch(err => {
            console.log(err);
            this.setLoading(false);
        });
    }

    @action
    clearUsers = () => {
        this.users.length = 0;
    }

    @action
    setLoading = (value) => {
        this.loading = value;
    }
}


export default new UsersStore();