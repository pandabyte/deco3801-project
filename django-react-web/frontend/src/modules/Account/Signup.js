import * as React from 'react';
import { Icon, Divider, Header, Button, Form, Grid, Container, List, Label, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import SignupStore from './SignupStore';
import UserAuthApi from '../../api/UserAuthApi';

@observer
export default class Signup extends React.Component {

    /* Event handler for sign up*/

    handleSignup = () => {
        console.log("signing up with : " + JSON.stringify(SignupStore.credentials));

        UserAuthApi.register(SignupStore.credentials)
            .then(res => console.log('res', res))
            .catch(err => console.log(err));
    }

    /* Redirect to sign in page */
    handleRedirectSignin = () => {
        this.props.history.push('/signin')
    }

    /* Update information information */
    handleInformationChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        SignupStore.updateInformationProperty(key, value);
    }

    /* Update credential information */
    handleCredentialChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        SignupStore.updateCredentialProperty(key, value);
    }

    render() {

        return (
            <div>
                <Container className='text-left'>

                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column >

                                <Header as='h1'>Your free account includes </Header>
                                <p> TODO: Enter functionalities of the website</p>
                                <p>tester 2</p>
                                <p>tester 3</p>

                            </Grid.Column>

                            <Grid.Column>
                                <Segment className='p-5'>
                                    <Header as='h1'>Create your account! </Header>
                                    <Form>
                                        <Form.Input
                                            name='email' placeholder='Email'
                                            onChange={this.handleCredentialChange}
                                        />
                                        <Form.Input
                                            name='username' placeholder='Username'
                                            onChange={this.handleCredentialChange}
                                        />
                                        <Form.Input
                                            name='password' type='password' placeholder='Password'
                                            onChange={this.handleCredentialChange}
                                        />

                                        <Form.Input
                                            name='firstname' placeholder='First Name'
                                            onChange={this.handleCredentialChange}
                                        />
                                        <Form.Input
                                            name='lastname' placeholder='Last Name'
                                            onChange={this.handleCredentialChange}
                                        />

                                        <Form.Input
                                            name='affiliation' placeholder='Affiliation'
                                            onChange={this.handleInformationChange}
                                        />
                                        <Form.Input
                                            name='position' placeholder='Position'
                                            onChange={this.handleInformationChange}
                                        />


                                        <Form.Button
                                            style={{ backgroundColor: '#27d3ff' }}
                                            fluid type="button"
                                            content='Sign me up!'
                                            onClick={this.handleSignup}
                                        />

                                    </Form>
                                    <span>
                                        Already have an account? <a onClick={this.handleRedirectSignin}><u>Sign in here!</u></a>
                                    </span>
                                </Segment>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}
