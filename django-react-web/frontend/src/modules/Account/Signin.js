import * as React from 'react';
import { Icon, Divider, Header, Form, Button, Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class Signin extends React.Component {

    handleLogin = () => { }

    handleRedirectSignup = () => {
        this.props.history.push('/signup')
    }


    render() {

        return (
            <div>
                <Container>

                    <div className='text-center p-5'>
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
                                onChange={this.handleChange}
                            />

                            <Form.Input
                                width={7}
                                iconPosition='left'
                                icon={{ name: 'lock' }}
                                placeholder='Password...'
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                            />

                            <Form.Button
                                width={2}
                                fluid type="button"
                                content='Signin!'
                                onClick={this.handleLogin}
                            />
                        </Form.Group>

                    </Form>


                    <div className='text-center'>
                        <span>Don't have an account? <a onClick={this.handleRedirectSignup}><u>Sign up here!</u></a></span>
                        <u>Forgot password?</u>
                    </div>
                </Container>
            </div>
        )
    }
}
