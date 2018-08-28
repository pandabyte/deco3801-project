import * as React from 'react';

// style sheets
import { Form, Input, Button, Link, Segment, Header } from 'semantic-ui-react';

// custom components
import UserAuthStore from './UserAuthStore';
import UserAuthApi from '../../api/UserAuthApi';

export default class UserAuth extends React.Component {

    componentDidlMount() {
        if (localStorage.getItem("token") && !UserAuthStore.isLoggedIn) {
            UserAuthStore.isLoggedIn = true;
        }

    }

    _handleChange = (e) => {
        UserAuthStore.updateProperty(e.target.name, e.target.value);
    }

    _handleLogin = () => {
        const { credentials } = UserAuthStore;

        UserAuthApi.login(credentials).then(res => {

            localStorage.setItem('token', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);



        }).catch(err => {
            console.log(err);
            this._handleLogout();
        });
    }


    _handleLogout = () => {
        console.log("Token removed, state reset");
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        UserAuthStore.isLoggedIn = false;
        UserAuthStore.userID = '';
    }

    _getUserID = () => {
        UserAuthApi.getUserId().then(res => {


            UserAuthStore.userID = res.data.userId

        }).catch(err => {
            console.log(err);
            this._handleLogout();
        });
    }

    render() {
        const { isLoggedIn, userID } = UserAuthStore;

        const logoutForm = (
            <Form>
                <Form.Input label='email' name="email" type="text" onChange={this._handleChange} />

                <Form.Input label='password' name="password" type="password" onChange={this._handleChange} />
                <p>UserID: {userID}</p>

                <Form.Button fluid full type="button" content='login' onClick={this._handleLogin} />
                <Form.Button fluid full type="button" content='get userID' onClick={this._getUserID} />
            </Form>
        )

        const loginForm = (
            <Form>
                <p>You are logged in</p>
                <p>UserID: {userID}</p>
                <Form.Button type="button" label='logout' onClick={this._handleLogout} />
            </Form>
        )

        var logForm = isLoggedIn ? loginForm : logoutForm;

        return (
            <div>
                {logForm}
            </div >
        );
    }
}
