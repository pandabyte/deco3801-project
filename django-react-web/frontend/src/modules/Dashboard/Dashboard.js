import * as React from 'react';
import { Container, Header, Icon, Grid, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer
export default class Dashboard extends React.Component {

    redirectToTarget = (e, data) => {
        console.log('redirecting to ' + data.id + ' ' + e.targte.id);
        this.props.history.push('/' + data.id)
    }

    render() {

        /* Array of tabs. One tab is associated with one react page */
        const tabs = [
            {
                iconName: 'user',
                tabName: 'Profile',
                url: '/profile'
            },
            {
                iconName: 'users',
                tabName: 'Users',
                url: '/users'
            },
            {
                iconName: 'cloud upload',
                tabName: 'Upload and process my data',
                url: '/process'
            },
            {
                iconName: 'cloud download',
                tabName: 'View or download saved reports',
                url: '/reports'
            },
            {
                iconName: 'globe',
                tabName: 'Perform a global search for a chemical compound',
                url: '/search'
            },
            {
                iconName: 'wechat',
                tabName: 'Forum and CEC alerts',
                url: '/forum'
            },
            {
                iconName: 'wrench',
                tabName: 'Hardware and acquisition methods',
                url: '/acquisition'
            },
            {
                iconName: 'graduation cap',
                tabName: 'Documentation and Education',
                url: '/information'
            },
            {
                iconName: 'help',
                tabName: 'Help and FAQ',
                url: '/help'
            }
        ];

        return (
            <Container className='text-center p-5'>

                {/* Map each tab to its presentation*/}
                <Grid columns={3} padded>
                    {tabs.map((tab, index) => {
                        return (


                            <Grid.Column key={index}>
                                <Menu.Item as={Link} name={tab.name} to={tab.url}>


                                    <Icon name={tab.iconName} size='massive' link={true} />
                                    <Header as='h2'> {tab.tabName} </Header>
                                </Menu.Item>

                            </Grid.Column>
                        )
                    })}
                </Grid>


            </Container>
        )
    }
}
