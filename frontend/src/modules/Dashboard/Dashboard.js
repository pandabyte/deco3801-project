import * as React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';

export default class Dashboard extends React.Component {

    render() {
        return (
            <Container>
                <Grid columns={3} padded>
                    <Grid.Column>
                        <Icon name='cloud upload' size='massive' />
                        <p>Upload and process my data</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='cloud download' size='massive' />
                        <p>View or download my saved reports</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='globe' size='massive' />
                        <p>Perform a global serach for a compound</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='user' size='massive' />
                        <p>My profile</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='wrench' size='massive' />
                        <p>My hardward and acquisition method</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='wechat' size='massive' />
                        <p>Forum and cec alerts</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='graduation cap' size='massive' />
                        <p>Documentation and education</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='users' size='massive' />
                        <p>Reseracher profiles</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='help' size='massive' />
                        <p>Help</p>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}
