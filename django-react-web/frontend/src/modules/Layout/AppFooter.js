import * as React from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react'

export default class AppFooter extends React.Component {

    render() {

        return (
            <div className='bg-dark'>
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

            </div>
        )
    }
}