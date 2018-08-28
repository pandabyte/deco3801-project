import { observable, action } from 'mobx';

class ProfileStore {
    @observable input = {}

    /* Sets all form inputs to current value from database */
    @action
    setup = () => {
        // TODO: pull existing data from database
        this.input = {
            first: 'Minh',
            last: 'Nguyen',
            affiliation: 'UQ',
            position: 'Developer',
            email: 'minh@example.com'
        }
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