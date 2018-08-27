// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

// style sheets
import '../../App.css';
import { Menu, Header, Icon } from 'semantic-ui-react';

// import custom components
import Home from '../../Home';
import Process from '../../modules/Process/Process';
import UserAuth from '../../modules/UserAuth/UserAuth';

// import store
import AppRouterStore from './AppRouterStore';

@observer
export default class AppRouter extends React.Component {

    componentDidMount() {
        AppRouterStore.setup();
    }

    render() {

        const { activeTab } = AppRouterStore;

        return (
            <div>

                <BrowserRouter>
                    <div>

                        <Menu pointing secondary>
                            <Menu.Item>
                                <div className='ui header'>
                                    <Header as='h1' className='text-left' content='CECEWSN' />
                                    <Header as='h3' className='text-left' content='Chemicals of Emerging Concern ' />
                                    <Header as='h3' className='text-left' content='Early Warning Social Network' />
                                </div>
                            </Menu.Item>

                            <Menu.Item
                                name='home'
                                active={activeTab === 'home'}
                                onClick={AppRouterStore.handleTabClick}
                                as={Link} to='/home'
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

                        <Switch>
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/process' component={Process} />
                            <Route exact path='/user' component={UserAuth} />
                        </Switch>

                    </div>

                </BrowserRouter>
            </div>
        );
    }
}
