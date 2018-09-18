import * as React from 'react';
import { Card, Segment, Checkbox, Form, Container, Grid, Icon, Image } from 'semantic-ui-react';

import UsersStore from './UsersStore';
import { observer } from 'mobx-react';
import mock from './mock';

@observer
export default class Users extends React.Component {

    render() {

        return (
            <div className='p-5 text-left'>
                <Grid columns={4}>
                    {mock.map((user, index) => {
                        return (
                            <Grid.Column key={index}>
                                <Card>
                                    <Image className='p-3' src='http://www.nyan.cat/cats/original.gif' />
                                    <Card.Content>
                                        <Card.Header>{user.firstname + ' ' + user.lastname}</Card.Header>

                                        <Card.Description>
                                            <p>{user.position}</p>
                                            <p>{user.affiliation}</p>
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