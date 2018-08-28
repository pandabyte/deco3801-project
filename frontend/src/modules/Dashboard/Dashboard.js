import * as React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';

export default class Dashboard extends React.Component {

    render() {
        return (
            <Container>

                <Grid columns={3} padded>
                    <Grid.Column>
                        <Icon name='upload' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='keyboard' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='blind' size='massive' />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}
