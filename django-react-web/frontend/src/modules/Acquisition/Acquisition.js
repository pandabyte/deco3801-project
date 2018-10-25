import * as React from 'react';
import { Grid, Icon, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class Acquisition extends React.Component {

    redirect = (e) => {
        this.props.history.push(`/acquisition/${e.target.id}`);
    }

    render() {

        return (
            <div className='p-5 text-center'>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <Label id='hrmsinstrument' onClick={this.redirect}>
                            <Icon id='hrmsinstrument' name='user' size='massive' />
                            My HRMS Instruments
                        </Label>
                    </Grid.Column>


                    <Grid.Column >
                        <Label fluid id='chromatagraphysystem' onClick={this.redirect}>
                            <Icon id='chromatagraphysystem' name='user' size='massive' />
                            My Chromotagraphy Systems
                            </Label>
                    </Grid.Column>

                    <Grid.Column>
                        <Label onClick={this.redirect}>
                            <Icon name='user' size='massive' />
                            My Columns
                        </Label>
                    </Grid.Column>

                    <Grid.Column>
                        <Label onClick={this.redirect}>
                            <Icon name='user' size='massive' />
                            My Acquisition Methods
                        </Label>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
