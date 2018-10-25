import * as React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class Acquisition extends React.Component {

    redirect = (e) => {
        this.props.history.push(`/acquisition/${e.target.id}`);
    }

    render() {

        const datas = [
            {
                id: 'hrmsinstrument',
                text: 'HRMS Instruments'
            },
            {
                id: 'chromatagraphysystem',
                text: 'Chromatagraphy Systems'
            },
            {
                id: 'columns',
                text: 'Columns'
            },
            {
                id: 'acquisitionmethods',
                text: 'Acquisition Methods'
            },
        ]

        return (
            <div className='p-5 text-center'>
                <Grid columns={2} padded>
                    {datas.map((data, index) => {
                        return(
                            <Grid.Column key={index}>
                                <Header as='h1' id={data.id} onClick={this.redirect} content={data.text}/>
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}
