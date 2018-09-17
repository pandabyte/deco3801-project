import * as React from 'react';
import { Icon, Divider, Header, Button, Form, Grid, Container, List, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class Signup extends React.Component {

    handleRedirectSignin = () => {
        this.props.history.push('/signin')
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


                                <Header> Create your account! </Header>
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

                                <span>Already have an account? <a onClick={this.handleRedirectSignin}><u>Sign in here!</u></a></span>


                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}
