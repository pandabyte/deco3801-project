import * as React from 'react';

// style sheets
import './App.css';
import { Form } from 'semantic-ui-react';

// custom components
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Layout/AppRouter';
import AppStore from './AppStore';
import UserAuthApi from './api/UserAuthApi';

export default class App extends React.Component {

    componentWillMount() {
        if (localStorage.getItem("token") && !AppStore.isLoggedIn) {
            AppStore.isLoggedIn = true;
        }
        console.log('will mount');
        this._getUserID();
    }

    _handleChange = (e) => {
        AppStore.updateProperty(e.target.name, e.target.value);
    }

    _handleLogin = () => {
        const { credentials } = AppStore;
        UserAuthApi.login(credentials).then(res => {
            console.log(res)
            if (res.ok) {
                console.log('Success', res);

                res.json().then(data => {
                    console.log(data);
                    localStorage.setItem('token', data.access);
                    AppStore.isLoggedIn = true;

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
        AppStore.isLoggedIn = false;
        AppStore.userID = '';
    }

    _getUserID = () => {
        UserAuthApi.getUserId()
            .then(res => {
                if (res.ok) {
                    console.log('Success', res);

                    return res.json().then(data => {
                        console.log(data);
                        AppStore.userID = data.userId
                    });
                }
                throw new Error(res.status + ' ' + res.statusText);
            })
            .catch(err => {
                console.log(err);
                this._handleLogout();
            });
    }


    _generateToken = () => {

    }

    render() {
        const { isLoggedIn, userID } = AppStore;

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
            <div className="App" >
                <AppHeader />

                <AppRouter />
                {logForm}

                <AppFooter />

            </div>
        );
    }

}
