import * as React from 'react';
import { Grid, Container, Divider, Header, Icon } from 'semantic-ui-react'

export default class AppFooter extends React.Component {

    render() {

        const clickers = [
            { href: "https://www.facebook.com/minh.nguyen.14661", icon: 'facebook square icon big' },
            { href: "https://github.com/minhhho2", icon: 'git square icon big' },
            { href: "https://www.linkedin.com", icon: 'linkedin square icon big' }
        ];
        return (
            <div className='bg-dark text-center'>
                <br />
                <Container >
                    <Grid divided='vertically'>
                        <Grid.Row columns={2} className='text-success'>

                            <Grid.Column>
                                <p>Email</p>
                                <p>Phone</p>
                            </Grid.Column>

                            <Grid.Column >
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Divider />

                    <Grid divided='vertically'>
                        <Grid.Row columns={2} className='text-success'>

                            <Grid.Column>
                                <p>Privacy & Term of Use</p>
                                <p>Feedback</p>
                            </Grid.Column>

                            <Grid.Column>
                                <p>Enquiries</p>
                                <p>Contact</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <br />
                <br />



            </div>
        )
    }
}