import * as React from 'react';

// style sheets
import { Form } from 'semantic-ui-react';

// custom components
import UserAuthStore from './UserAuthStore';
import UserAuthApi from '../../api/UserAuthApi';

export default class UserAuth extends React.Component {

    componentWillMount() {
        if (localStorage.getItem("token") && !UserAuthStore.isLoggedIn) {
            UserAuthStore.isLoggedIn = true;
        }
        console.log('will mount');
        this._getUserID();
    }

    _handleChange = (e) => {
        UserAuthStore.updateProperty(e.target.name, e.target.value);
    }

    _handleLogin = () => {
        const { credentials } = UserAuthStore;
        UserAuthApi.login(credentials).then(res => {
            console.log(res)
            if (res.ok) {
                console.log('Success', res);

                res.json().then(data => {
                    console.log(data);
                    localStorage.setItem('token', data.access);
                    UserAuthStore.isLoggedIn = true;

                    console.log('token set: ' + localStorage.getItem('token') + ' now getting userid');
                    this._getUserID();
                });
            }
            throw new Error(res.status + ' ' + res.statusText);
        }).catch(err => {
            console.log(err);
            this._handleLogout();
        });
    }


    _handleLogout = () => {
        console.log("Token removed, state reset");
        localStorage.removeItem('token');
        UserAuthStore.isLoggedIn = false;
        UserAuthStore.userID = '';
    }

    _getUserID = () => {
        UserAuthApi.getUserId()
            .then(res => {
                if (res.ok) {
                    console.log('Success', res);

                    return res.json().then(data => {
                        console.log(data);
                        UserAuthStore.userID = data.userId
                    });
                }
                throw new Error(res.status + ' ' + res.statusText);
            })
            .catch(err => {
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

                <Form.Button type="button" content='login' onClick={this._handleLogin} />
                <Form.Button type="button" content='get userID w/o token' onClick={this._handleLogin} />
            </Form>
        )

        const loginForm = (
            <Form>
                <p>You are logged in</p>
                <p>UserID: {userID}</p>
                <Form.Button type="button" content='logout' onClick={this._handleLogout} />
            </Form>
        )

        var logForm = isLoggedIn ? loginForm : logoutForm;

        return (
            <div>
                {logForm}
            </div>
        );
    }
}
