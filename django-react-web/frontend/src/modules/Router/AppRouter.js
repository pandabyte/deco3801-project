// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Menu, Icon, Container, Sticky } from 'semantic-ui-react';

// import custom components
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Users from '../Users/Users';
import Signup from '../Account/Signup';
import Signin from '../Account/Signin';
import Process from '../Process/Process';
import ChemicalSearch from '../Search/ChemicalSearch';
import Help from '../Help/Help';
import Error404 from '../Error/Error404';

// import store
import AppRouterStore from './AppRouterStore';
import SigninStore from '../Account/SigninStore';


@observer
export default class AppRouter extends React.Component {

    // ComponentDidMount called immediately after a component is mounted
    componentDidMount() {
        AppRouterStore.setup();
    }


    handleSignout = () => {
        console.log("Signout out and clearing tokens from local and state management and userID");
        SigninStore.clear();
    }

    render() {
        /* Perform computation here */
        var exampleComputation = 2 + 2;

        // pull observable properties from AppRouterStore
        const { activeTab } = AppRouterStore;

        var mask = SigninStore.tokens.refresh === '' && SigninStore.tokens.access === '' && SigninStore.userID === '';

        var authTabs = mask ? 1 : 2;

        var secondaryMenu = mask ?
            (
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign in'
                        active={activeTab === 'sign in'}
                        icon={<Icon name='sign-in' />}
                        onClick={AppRouterStore.handleTabClick}
                        as={Link} to='/signin'
                    />
                    <Menu.Item
                        name='sign up'
                        active={activeTab === 'sign up'}
                        icon={<Icon name='signup' />}
                        onClick={AppRouterStore.handleTabClick}
                        as={Link} to='/signup'
                    />
                </Menu.Menu>
            ) :
            (
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sign out'
                        icon={<Icon name='sign-out' />}
                        active={activeTab === 'sign out'}
                        onClick={SigninStore.handleSignout}
                    />
                </Menu.Menu>
            );



        // Return has to return one component
        return (

            <BrowserRouter>
                <div className='text-center'>

                    {/* Scrollable nav bar */}
                    <Sticky>
                        {/* semantic UI components for linking to url paths */}
                        <Menu className='bg-light p-4' pointing secondary icon='labeled' >
                            <Menu.Item
                                name='home'
                                active={activeTab === 'home'}
                                icon={<Icon name='home' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/'
                            />

                            <Menu.Item
                                name='dashboard'
                                active={activeTab === 'dashboard'}
                                icon={<Icon name='dashboard' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/dashboard'
                            />

                            <Menu.Item
                                name='profile'
                                active={activeTab === 'profile'}
                                icon={<Icon name='user' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/profile'
                            />

                            <Menu.Item
                                name='users'
                                active={activeTab === 'users'}
                                icon={<Icon name='users' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/users'
                            />

                            <Menu.Item
                                name='process'
                                active={activeTab === 'process'}
                                icon={<Icon name='cloud upload' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/process'
                            />

                            <Menu.Item
                                name='reports'
                                active={activeTab === 'reports'}
                                icon={<Icon name='cloud download' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/reports'
                            />

                            <Menu.Item
                                name='search'
                                active={activeTab === 'search'}
                                icon={<Icon name='globe' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/search'
                            />

                            <Menu.Item
                                name='acquisition'
                                active={activeTab === 'acquisition'}
                                icon={<Icon name='wrench' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/acquisition'
                            />

                            <Menu.Item
                                name='forum'
                                active={activeTab === 'forum'}
                                icon={<Icon name='wechat' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/forum'
                            />

                            <Menu.Item
                                name='information'
                                active={activeTab === 'information'}
                                icon={<Icon name='graduation cap' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/information'
                            />

                            <Menu.Item
                                name='help'
                                active={activeTab === 'help'}
                                icon={<Icon name='help' />}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/help'
                            />

                            {secondaryMenu}

                        </Menu>
                    </Sticky>


                    {/* Switch Component that holds Routes */}
                    <br />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/signin' component={Signin} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/users' component={Users} />
                        <Route exact path='/process' component={Process} />
                        <Route exact path='/search' component={ChemicalSearch} />
                        <Route exact path='/help' component={Help} />
                        <Route component={Error404} />

                    </Switch>
                    <br />

                </div>
            </BrowserRouter>
        );
    }
}
