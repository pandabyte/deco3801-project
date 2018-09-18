import * as React from 'react';
import { Header, Form, Container, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import SigninStore from './SigninStore';
import UserAuthApi from '../../api/UserAuthApi';
import UserAuthStore from '../Home/UserAuthStore';


@observer
export default class Signin extends React.Component {

    /* Use provided credentials to log into account and receive refresh and access tokens */
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

        }).catch(err => {
            console.log(err);
            this.handleLogout();
        });
    }

    /* Update credential information */
    handleCredentialChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        SigninStore.updateCredentialProperty(key, value);
    }

    /* Clear tokens */
    handleLogout = () => {

        console.log("Token removed, state reset");
        localStorage.removeItem('refresh');
        localStorage.removeItem('access');

        SigninStore.clear();
    }

    handleRedirectSignup = () => {
        this.props.history.push('/signup')
    }


    render() {

        return (
            <div>
                <Container>

                    <Segment>

                        <div className='text-left p-5'>
                            <Header as='h1'>Enter your email and password to log in to your account! </Header>
                        </div>

                        <Form>
                            <Form.Group>
                                <Form.Input
                                    width={7}
                                    iconPosition='left'
                                    icon={{ name: 'user' }}
                                    placeholder='Email...'
                                    name="email"
                                    type="email"
                                    onChange={this.handleCredentialChange}
                                />

                                <Form.Input
                                    width={7}
                                    iconPosition='left'
                                    icon={{ name: 'lock' }}
                                    placeholder='Password...'
                                    name="password"
                                    type="password"
                                    onChange={this.handleCredentialChange}
                                />

                                <Form.Button
                                    width={2}
                                    fluid type="button"
                                    content='Sign in!'
                                    onClick={this.handleLogin}
                                />
                            </Form.Group>
                        </Form>

                        <div className='text-center p-5'>
                            <span>
                                Don't have an account? <a onClick={this.handleRedirectSignup}><u>Sign up here!</u></a>
                            </span>
                            <u>Forgot password?</u>
                        </div>
                    </Segment>

                </Container>
            </div>
        )
    }
}
