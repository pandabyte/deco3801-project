// import dependencies
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Menu, Icon, Sticky } from 'semantic-ui-react';

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
import Acquisition from '../Acquisition/Acquisition';
import HrmsInstrumentView from '../Acquisition/HrmsInstrument/HrmsInstrumentView';
import ChromatographySystemView from '../Acquisition/ChromatographySystem/ChromatographySystemView';
import ReportView from '../Report/ReportView';
import InformationView from '../Information/InformationView';

@inject("rootStore")
@observer
export default class AppRouter extends React.Component {

    componentWillMount() {
        this.verifyToken();
    }

    componentWillUpdate(nextProps, nextState) {
        this.verifyToken();
    }

    verifyToken() {
        this.props.rootStore.verifyToken();
    }

    /* Set up initial states */
    componentDidMount() {
        AppRouterStore.setup();
    }

    /* Event handler for signing out */
    handleSignout = () => {
        SigninStore.clear();
    }

    renderPrimaryNavByAuthState(activeTab) {
        var renderedNav = [<Menu.Item
            key='0'
            name='home'
            active={activeTab === 'home'}
            icon={<Icon name='home' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/'
        />,
        <Menu.Item
            key='1'
            name='dashboard'
            active={activeTab === 'dashboard'}
            icon={<Icon name='dashboard' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/dashboard'
        />,
        <Menu.Item
            key='2'
            name='process'
            active={activeTab === 'process'}
            icon={<Icon name='cloud upload' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/process'
        />,
        <Menu.Item
            key='3'
            name='reports'
            active={activeTab === 'reports'}
            icon={<Icon name='cloud download' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/reports'
        />,
        <Menu.Item
            key='4'
            name='search'
            active={activeTab === 'search'}
            icon={<Icon name='globe' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/search'
        />,
        <Menu.Item
            key='5'
            name='acquisition'
            active={activeTab === 'acquisition'}
            icon={<Icon name='wrench' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/acquisition'
        />,
        <Menu.Item
            key='6'

            name='forum'
            active={activeTab === 'forum'}
            icon={<Icon name='wechat' />}
            onClick={AppRouterStore.handleTabClick}
            href='http://ec2-18-224-228-152.us-east-2.compute.amazonaws.com/' target='_blank'
        />,
        <Menu.Item
            key='7'

            name='information'
            active={activeTab === 'information'}
            icon={<Icon name='graduation cap' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/information'
        />,
        <Menu.Item
            key='8'

            name='help'
            active={activeTab === 'help'}
            icon={<Icon name='help' />}
            onClick={AppRouterStore.handleTabClick}
            as={Link} to='/help'
        />];
        if (this.props.rootStore.tokenVerified) { // can be enhanced with auth level
            renderedNav.push(<Menu.Item
                key='9'
                name='profile'
                active={activeTab === 'profile'}
                icon={<Icon name='user' />}
                onClick={AppRouterStore.handleTabClick}
                as={Link} to='/profile'
            />,
                <Menu.Item
                    key='10'
                    name='users'
                    active={activeTab === 'users'}
                    icon={<Icon name='users' />}
                    onClick={AppRouterStore.handleTabClick}
                    as={Link} to='/users'
                />)
        }
        return renderedNav;
    }

    renderSecondaryNavByAuthState = (activeTab) => {
        var renderedNav = [];
        if (!this.props.rootStore.tokenVerified) {
            renderedNav.push(
                <Menu.Menu position='right'>
                    <Menu.Item
                        key='11'
                        name='sign in'
                        active={activeTab === 'sign in'}
                        icon={<Icon name='sign-in' />}
                        onClick={AppRouterStore.handleTabClick}
                        as={Link} to='/signin'
                    />
                    <Menu.Item
                        key='12'
                        name='sign up'
                        active={activeTab === 'sign up'}
                        icon={<Icon name='signup' />}
                        onClick={AppRouterStore.handleTabClick}
                        as={Link} to='/signup'
                    />
                </Menu.Menu>
            );
        } else {
            renderedNav.push(
                <Menu.Menu position='right'>
                    <Menu.Item
                        key='13'
                        name='sign out'
                        icon={<Icon name='sign-out' />}
                        active={activeTab === 'sign out'}
                        onClick={this.handleSignout}
                    />
                </Menu.Menu>
            )
        }
        return renderedNav;
    }

    handleSignout = () => {
        SigninStore.handleSignout();
        this.verifyToken();
    }

    setRouteByAuthState = () => {
        let push = []
        if (this.props.rootStore.tokenVerified) {
            push.push(<Route exact path='/profile' component={Profile} />);
            push.push(<Route exact path='/users' component={Users} />);
        }
        return push;
    }

    render() {

        const { activeTab } = AppRouterStore;

        return (
            <div>

                {/* Router for containing UI links and Url Routes */}
                <BrowserRouter>

                    <div className='text-center'>

                        {/* semantic UI components for linking to url paths */}
                        <Menu className='bg-light p-4' pointing secondary icon='labeled' >
                            {this.renderPrimaryNavByAuthState(activeTab)}
                            {this.renderSecondaryNavByAuthState(activeTab)}
                        </Menu>

                        {/* Switch Component that holds Routes */}
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/signup' component={Signup} />
                            <Route exact path='/signin' component={Signin} />
                            <Route exact path='/dashboard' component={Dashboard} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/information' component={InformationView} />
                            <Route exact path='/reports' component={ReportView} />
                            
                            <Route exact path='/users' component={Users} />
                            <Route exact path='/process' component={Process} />
                            <Route exact path='/search' component={ChemicalSearch} />
                            <Route exact path='/acquisition' component={Acquisition} />
                            <Route exact path='/acquisition/hrmsinstrument' component={HrmsInstrumentView} />
                            <Route exact path='/acquisition/chromatagraphysystem' component={ChromatographySystemView} />
                            <Route exact path='/help' component={Help} />
                            {this.setRouteByAuthState()}
                            <Route component={Error404} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
