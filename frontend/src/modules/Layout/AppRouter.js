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

// import store
import AppRouterStore from './AppRouterStore';

@observer
export default class AppRouter extends React.Component {

    state = {
        activeItem: 'home',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;

        return (
            <div>

                <BrowserRouter>
                    <div>

                        <Menu pointing secondary>
                            <Menu.Item>
                                <div className='ui header'>
                                    <Header
                                        as='h1' className='text-left'
                                        content='CECEWSN'
                                    />
                                    <Header
                                        as='h3' className='text-left'
                                        content='Chemicals of Emerging Concern '
                                    />
                                    <Header
                                        as='h3' className='text-left'
                                        content='Early Warning Social Network'
                                    />
                                </div>
                            </Menu.Item>

                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                as={Link} to='/home'
                            />

                            <Menu.Item
                                name='process'
                                active={activeItem === 'process'}
                                onClick={this.handleItemClick}
                                as={Link} to='/process'
                            />

                            <Menu.Menu position='right'>

                                <Menu.Item
                                    active={activeItem === 'new-tab'}
                                    onClick={this.handleItemClick}
                                    icon={<Icon name='closed captioning' size='huge' />}
                                />
                                <Menu.Item
                                    active={activeItem === 'new-tab'}
                                    onClick={this.handleItemClick}
                                    icon={<Icon name='assistive listening systems' size='huge' />}
                                />
                                <Menu.Item
                                    active={activeItem === 'new-tab'}
                                    onClick={this.handleItemClick}
                                    icon={<Icon name='audio description' size='huge' />}
                                />

                            </Menu.Menu>
                        </Menu>

                        <Switch>
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/process' component={Process} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
