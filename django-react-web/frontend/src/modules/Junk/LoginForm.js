
import * as React from 'react';
import { Segment, Divider, Icon, Form, Header, Grid, Container } from 'semantic-ui-react';

import information from './CECEWSN_IMG.png' // relative path to image 
import UserAuthStore from './UserAuthStore';


export default class LoginForm extends React.Component {

    handleLogin = () => { }

    handleChange = () => { }

    getUserId = () => { }

    handleFormChange = () => {
        console.log(UserAuthStore.isRegistered);
        UserAuthStore.toggleForm();
    }

    render() {
        return (
            <div>
                <Segment style={{ width: '800px', backgroundColor: '#007ab3' }}>

                    <div >
                        {/* left */}
                        <div className='d-inline-block p-5'>
                            <Header as='h1' content='Login to our site!' />
                            <Header as='h2' content='Enter username and password to log on:' />
                        </div>
                        {/* right */}
                        <div className='d-inline-block p-5 pull-right'>
                            <Icon name='lock' size='massive' />
                        </div>
                    </div>

                    <Divider />

                    <Form>
                        <Form.Input
                            iconPosition='left'
                            icon={{ name: 'user' }}
                            placeholder='Email...'
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            iconPosition='left'
                            icon={{ name: 'lock' }}
                            placeholder='Password...'
                            name="password"
                            type="password"
                            onChange={this.handleChange} />
                        <Form.Button style={{ backgroundColor: '#27d3ff' }} fluid type="button" content='Login!' onClick={this.handleLogin} />

                    </Form>
                    <br />
                    <Divider />
                    <p
                        style={{ padding: '25px' }}
                        className='text-center'
                        onClick={this.handleFormChange}
                    >
                        Dont have an account? REGISTER HERE!
                    </p>
                </Segment>

            </div>
        )
    }
}