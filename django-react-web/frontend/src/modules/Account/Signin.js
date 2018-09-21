import * as React from 'react';
import { Header, Form, Container, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import SigninStore from './SigninStore';
import UserAuthApi from '../../api/UserAuthApi';

@observer
export default class Signin extends React.Component {

    /* Use  credentials to sign in and receive refresh and access tokens */
    handleLogin = () => {
        const { credentials } = SigninStore;

        // Returns a 'refresh' and 'access' token
        UserAuthApi.login(credentials).then(res => {
            console.log("API Call Login Response: \n", res.data);

            // store on state manager
            SigninStore.updateTokenProperty('refresh', res.data.refresh);
            SigninStore.updateTokenProperty('access', res.data.access);

            // store on local storage
            localStorage.setItem('refresh', res.data.refresh);
            localStorage.setItem('access', res.data.access);

            // store user ID
            UserAuthApi.getUserID().then(res => {
                SigninStore.setUserID(res.data.userId);
            });
            this.props.history.push('/')

        }).catch(err => {
            console.log(err);
            SigninStore.handleSignout();
            this.props.history.push('/')
        });
    }

    /* Update credential information */
    handleCredentialChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        SigninStore.updateCredentialProperty(key, value);
    }

    handleRedirectSignup = () => {
        this.props.history.push('/signup')
    }


    render() {

        return (
            <Container>

                <Segment>
                    {/* Login header */}
                    <div className='text-left p-5'>
                        <Header as='h1'>Enter your email and password to log in to your account! </Header>
                    </div>

                    {/* Login form */}
                    <Form>
                        <Form.Group>
                            <Form.Input
                                width={7} name="email" type="email"
                                iconPosition='left' icon={{ name: 'user' }}
                                placeholder='Email...'
                                onChange={this.handleCredentialChange}
                            />

                            <Form.Input
                                width={7} name="password" type="password"
                                iconPosition='left' icon={{ name: 'lock' }}
                                placeholder='Password...'
                                onChange={this.handleCredentialChange}
                            />

                            <Form.Button
                                width={2} fluid type="button"
                                content='Sign me in!'
                                onClick={this.handleLogin}
                            />
                        </Form.Group>
                    </Form>
                    {/* Login footer message */}
                    <div className='text-center p-5'>
                        <span className='p-5'>
                            Don't have an account?
                                <a onClick={this.handleRedirectSignup}>
                                <u>Sign up here!</u>
                            </a>
                        </span>
                        <u className='p-5'>Forgot password?</u>
                    </div>
                </Segment>

            </Container>
        )
    }
}
