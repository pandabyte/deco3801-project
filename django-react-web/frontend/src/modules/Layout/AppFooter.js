import * as React from 'react';
import { Grid, Header } from 'semantic-ui-react'

export default class AppFooter extends React.Component {

    render() {
        return (
            <div className='App-footer p-5 text-white text-left'>
                <br />
                <Grid divided='vertically' columns={2}>
                    <Grid.Column>
                        <Header className='text-white' as='h2'> QAEHS</Header>
                        <p>Level 4, 20 Cornwall Street, Woolloongabba, QLD, 4102</p>
                        <p>+61 7 3443 2443</p>
                        <p>qaehsadmin@uq.edu.au</p>
                    </Grid.Column>

                    <Grid.Column >
                        <Header className='text-white' as='h2'> COMPANY</Header>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}