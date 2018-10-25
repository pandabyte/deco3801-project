import * as React from 'react';
import { Card, Header } from 'semantic-ui-react';

import { observer } from 'mobx-react';

import MOCK_REPORTS from './Mock';

@observer
export default class ReportView extends React.Component {

    render() {

        return (
            <div className='text-left p-5'>
                <Header as='h1'> Report</Header>
                <Card.Group itemsPerRow={4}>
                    {MOCK_REPORTS.map((report, index) => {
                        return (<Card key={index}>
                            <Card.Content>
                                <Card.Header>Target {index}</Card.Header>
                            </Card.Content>

                            <Card.Content>
                                {Object.keys(report).map((key, index) => {
                                    return (<p key={index}>
                                        <span>{`${key}`}</span>
                                        <span className='float-right'>{`${isNaN(report[key]) ? report[key] : report[key].toFixed(4)}`}</span>
                                    </p>)
                                })}
                            </Card.Content>
                        </Card>)
                    })}
                </Card.Group>

            </div>
        )
    }
}