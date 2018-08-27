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

    componentDidMount() {
        if (localStorage.getItem("token") && !AppStore.isLoggedIn) {
            AppStore.isLoggedIn = true;
        }
    }

    _handleChange = (e) => {
        AppStore.updateProperty(e.target.name, e.target.value);
    }

    _handleLogin = () => {
        console.log('what the fuck');
        const { credentials } = AppStore;

        UserAuthApi.login(credentials).then(res => {

            localStorage.setItem('token', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            AppStore.isLoggedIn = true;

            this._getUserID();


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

        console.log('get user id from app store', localStorage.getItem('token'));

        UserAuthApi.getUserId()
            .then(res => {

                AppStore.userID = res.data.userId;

            })
            .catch(err => {
                console.log(err);
                this._handleLogout();
            });
    }


    render() {
        const { isLoggedIn, userID } = AppStore;

        const logoutForm = (
            <Form>
                <Form.Input label='email' name="email" type="text" onChange={this._handleChange} />

                <Form.Input label='password' name="password" type="password" onChange={this._handleChange} />
                <p>UserID: {userID}</p>

                <Form.Button type="button" content='loginss' onClick={this._handleLogin} />
                <Form.Button type="button" content='get userID w/o token' onClick={this._getUserID} />
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
