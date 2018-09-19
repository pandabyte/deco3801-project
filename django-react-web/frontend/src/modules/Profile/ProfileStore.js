import { observable, action } from 'mobx';
import UserApi from '../../api/UserApi';


class ProfileStore {
    @observable input = {
        first: '',
        last: '',
        affiliation: '',
        position: '',
        email: ''
    }

    /* Sets all form inputs to current value from database */
    @action
    setup = () => {

        UserApi.user()
            .then(res => {
                const user = res.data;
                this.input = {
                    first: user.first_name,
                    last: user.last_name,
                    affiliation: user.affiliation,
                    position: user.position,
                    email: user.email,
                    username: user.username
                }
            })
            .catch(err => console.log(err));
    }

    /* Clears all form inputs */
    @action
    reset = () => {
        this.input = {
            first: '',
            last: '',
            affiliation: '',
            position: '',
            email: ''
        }
    }

    /* Updates the state */
    @action
    updateInputProperty = (key, value) => {
        this.input[key] = value;
        console.log('updating ' + this.input[key]);
    }
}

export default new ProfileStore();