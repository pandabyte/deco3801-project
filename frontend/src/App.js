import * as React from 'react';

// style sheets
import './App.css';
import { Form } from 'semantic-ui-react';

// custom components
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Layout/AppRouter';
import AppStore from './modules/UserAuth/UserAuthStore';
import UserAuthApi from './api/UserAuthApi';

export default class App extends React.Component {

    render() {

        return (
            <div className="App" >
                <AppHeader />

                <AppRouter />

                <AppFooter />

            </div>
        );
    }

}
