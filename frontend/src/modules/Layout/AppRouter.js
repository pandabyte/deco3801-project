// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

// style sheets
import '../../App.css';
import { Menu, Icon, Container } from 'semantic-ui-react';

// import custom components
import Dashboard from '../Dashboard/Dashboard';
import Process from '../../modules/Process/Process';
import UserAuth from '../../modules/UserAuth/UserAuth';

// import store
import AppRouterStore from './AppRouterStore';
import Profile from '../Profile/Profile';

@observer
export default class AppRouter extends React.Component {

    // ComponentDidMount called immediately after a component is mounted
    componentDidMount() {
        AppRouterStore.setup();
    }

    // Example function
    _exampleFunction = (arg1, arg2, arg3) => {
        console.log("calling example function");
    }

    render() {
        /* Perform computation here */
        var exampleComputation = 2 + 2;

        // pull observable properties from AppRouterStore
        const { activeTab } = AppRouterStore;

        // Return has to return one component
        return (

            <BrowserRouter>
                <div>
                    {/* semantic UI components for linking to url paths */}
                    <Menu pointing secondary>
                        <Menu.Item
                            name='dashboard'
                            active={activeTab === 'dashboard'}
                            onClick={AppRouterStore.handleTabClick}
                            as={Link} to='/'
                        />

                        <Menu.Item
                            name='profile'
                            active={activeTab === 'profile'}
                            onClick={AppRouterStore.handleTabClick}
                            as={Link} to='/profile'
                        />

                        <Menu.Item
                            name='process'
                            active={activeTab === 'process'}
                            onClick={AppRouterStore.handleTabClick}
                            as={Link} to='/process'
                        />

                        <Menu.Item
                            name='user'
                            active={activeTab === 'user'}
                            onClick={AppRouterStore.handleTabClick}
                            as={Link} to='/user'
                        />

                        <Menu.Menu position='right'>
                            <Menu.Item
                                active={activeTab === 'new-tab'}
                                onClick={AppRouterStore.handleTabClick}
                                icon={<Icon name='closed captioning' size='huge' />}
                            />
                        </Menu.Menu>
                    </Menu>

                    {/* Switch Component that holds Routes */}
                    <Container>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/process' component={Process} />
                            <Route exact path='/user' component={UserAuth} />
                        </Switch>
                    </Container>

                </div>
            </BrowserRouter>
        );
    }
}
