import * as React from 'react';
import { Card, Segment, Header, Grid, Image, Loader } from 'semantic-ui-react';

import UsersStore from './UsersStore';

import { observer } from 'mobx-react';

@observer
export default class Users extends React.Component {

    /* Set initial states */
    componentDidMount() {
        UsersStore.setLoading(true);
        UsersStore.clearUsers();
        UsersStore.setup();
    }

    renderLoader = () => {
        console.log(UsersStore.loading);
        if (UsersStore.loading) {
            return (
                <div>
                    <Loader active inline='centered'>
                        <Segment>
                            <Header as='h2' content='Loading' />
                            <Image
                                src='http://www.nyan.cat/cats/original.gif'
                                size='medium' rounded centered
                            />
                        </Segment>

                    </Loader>
                </div>
            )
        }
        return (<div></div>)
    }

    render() {

        const { users } = UsersStore;

        const loader = this.renderLoader();

        return (
            <div className='text-left'>
                {loader}
                <Grid container columns={4}>
                    {/* Map each user to the following layout */}
                    {users.map((user, index) => {
                        return (
                            <Grid.Column key={index}>
                                <Card>
                                    <Image className='' src='http://www.nyan.cat/cats/original.gif' />
                                    <Card.Content>
                                        <Card.Header>{user.firstname + ' ' + user.lastname}</Card.Header>
                                        <Card.Description>
                                            <p>{user.position}</p>
                                            <p>{user.email}</p>
                                            <p>{user.username}</p>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        );
                    })}
                </Grid>

            </div>
        )
    }
}