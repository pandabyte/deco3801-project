import * as React from 'react';
import { Header, Form, Container, Segment, Message } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import SigninStore from './SigninStore';
import UserAuthApi from '../../api/UserAuthApi';

@inject("rootStore")
@observer
export default class Signin extends React.Component {

    state = { loading: false, error: false, update: false }

    componentWillMount() {
        this.verifyToken();
    }

    componentWillUpdate(nextProps, nextState) {
        this.verifyToken();
    }

    verifyToken() {
        this.props.rootStore.verifyToken();
        if (this.props.rootStore.tokenVerified) {
            this.props.history.push('/');
        }
    }

    /* Use  credentials to sign in and receive refresh and access tokens */
    handleLogin = () => {
        const { credentials } = SigninStore;
        this.setState({ loading: true });
        // Returns a 'refresh' and 'access' token
        UserAuthApi.login(credentials).then(res => {
            console.log("API Call Login Response: \n", res);

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
            // this.props.history.push('/')
            this.setState({ update: true });

        }).catch(err => {
            console.log(err);
            SigninStore.handleSignout();
            SigninStore.setErrorMessage(err.response.data.error);
            this.setState({ error: true, loading: false});
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

    getErrorMessage = () => {
        console.log(SigninStore.errorVisible);
        if (SigninStore.errorVisible) {
            return (<Message
                negative
                content={SigninStore.errorMessage ? SigninStore.errorMessage 
                    : "Unspecified error when logging in, please try again."}
                onDismiss={SigninStore.clearErrorMessage}
            />)
        } else {
            return (<div></div>)
        }
    }

    render() {
        let errorMessage = this.getErrorMessage();
        return (
            <Container>

                <Segment>
                    {/* Login header */}
                    <div className='text-left p-5'>
                        <Header as='h1'>Enter your email and password to log in to your account! </Header>
                    </div>

                    {/* Login form */}
                    <Form onSubmit={this.handleLogin} loading={this.state.loading} error={this.state.error}>
                        {errorMessage}
                        <Form.Group>
                            <Form.Input
                                width={7} name="email" type="email"
                                iconPosition='left' icon={{ name: 'user' }}
                                placeholder='Email...'
                                onChange={this.handleCredentialChange}
                                required
                            />

                            <Form.Input
                                width={7} name="password" type="password"
                                iconPosition='left' icon={{ name: 'lock' }}
                                placeholder='Password...'
                                onChange={this.handleCredentialChange}
                                required
                            />

                            <Form.Button
                                width={2} fluid type="submit"
                                content='Sign me in!'
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
