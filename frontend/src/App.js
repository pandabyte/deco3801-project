import * as React from 'react';

// style sheets
import './App.css';
import { } from 'semantic-ui-react';

// custom components
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Layout/AppRouter';

export default class App extends React.Component {

    render() {

        return (
            <div className="App" >


                {/* Header for web app */}
                <AppHeader />

                {/* Navigation bar  and routing for web app */}
                <AppRouter />

                {/* Footer for web app */}
                <AppFooter />

            </div>
        );
    }

}
