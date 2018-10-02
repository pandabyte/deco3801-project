import * as React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class Acquisition extends React.Component {

    render() {

        return (
            <div className='p-5 text-center'>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <Icon name='user' size='massive' />
                        My HRMS Instruments
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='user' size='massive' />
                        My Chromotagraphy Systems
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='user' size='massive' />
                        My Columns
                    </Grid.Column>

                    <Grid.Column>
                        <Icon name='user' size='massive' />
                        My Acquisition Methods
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
