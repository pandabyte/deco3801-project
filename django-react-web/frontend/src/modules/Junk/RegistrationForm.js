
import * as React from 'react';
import { Icon, Segment, Divider, Form, Image, Header } from 'semantic-ui-react';
import UserAuthStore from './UserAuthStore';

export default class RegistrationForm extends React.Component {

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
                            <Header as='h1' content='Sign up now!' />
                            <Header as='h2' content='Fill in the form below to get instant access:' />
                        </div>
                        {/* right */}
                        <div className='d-inline-block p-5 pull-right'>
                            <Icon name='edit' size='massive' />
                        </div>
                    </div>

                    <Divider />

                    <Form>

                        <Form.Input
                            name='first' placeholder='First Name'
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name='last' placeholder='Last Name'
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name='affiliation' placeholder='Affiliation'
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name='position' placeholder='Position'
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name='email' placeholder='Email Address'
                            onChange={this.handleChange}
                        />

                        <Form.Button
                            style={{ backgroundColor: '#27d3ff' }}
                            fluid type="button"
                            content='Sign me up!'
                            onClick={this.handleLogin}
                        />

                    </Form>
                    <br />
                    <Divider />
                    <p
                        style={{ padding: '25px' }}
                        className='text-center'
                        onClick={this.handleFormChange}
                    >
                        Already a user? LOGIN HERE!
                    </p>
                </Segment>

            </div>
        )
    }
}