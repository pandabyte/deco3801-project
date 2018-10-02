// import dependencies
import * as React from 'react';
import { } from 'semantic-ui-react';

// style sheets
import './App.css';

// import custom components
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Router/AppRouter';

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
