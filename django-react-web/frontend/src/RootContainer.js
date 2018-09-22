import * as React from 'react';
import AppFooter from './modules/Layout/AppFooter';
import AppHeader from './modules/Layout/AppHeader';
import AppRouter from './modules/Router/AppRouter';
import { observer, inject } from 'mobx-react';

@inject('rootStore')
@observer
export default class App extends React.Component {

    componentWillMount() {
        this.props.rootStore.verifyToken();
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.rootStore.verifyToken();
    }

    render() {
        if (this.props.rootStore.loaded) {
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
        } else {
            return (<div></div>);
        }
    }

}
