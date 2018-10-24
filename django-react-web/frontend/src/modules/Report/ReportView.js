import * as React from 'react';
import { Card, Segment, Header, Grid, Image, Loader } from 'semantic-ui-react';

import { observer } from 'mobx-react';

import MOCK_REPORTS from './Mock';

@observer
export default class ReportView extends React.Component {

    /* Set initial states */
    componentDidMount() {

    }

    redirectReport = (e) => {
        console.log("redirect to report /" + e.target.id)
    }

    render() {
        
        return (
            <div className='text-left p-3'>
                <Header as='h1'> Report</Header>
                <Card.Group itemsPerRow={4}>
                    {MOCK_REPORTS.map((report, index) => {
                        return (
                            <Card key={index} onClick={this.redirectReport}>
                                <Card.Content>
                                    {Object.keys(report).map((key, index) => {
                                        return (
                                            <p key={index}>
                                                <span className='float-left'>{`${key}`}</span>
                                                <span className='float-right'>{`${report[key]}`}</span>
                                            </p>
                                        )
                                    })}
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>

            </div>
        )
    }
}