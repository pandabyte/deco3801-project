import * as React from 'react';
import { Icon, Divider, Header, Button } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Config extends React.Component {

    componentDidMount = () => {

    }

    render() {

        const { config, sampleLocation, sampleDate, sampleType } = ProcessStore;


        const numberFiles = config['isSingleFile'] ? 'Single' : 'Multiple';
        return (
            <div>

                <Header> Config Stage </Header>
                <Divider />

                <Header> General Information</Header>
                <p>Stage: {config['stage']}</p>
                <Divider />

                <Header> Selected File Information</Header>
                <p>Number of files: {numberFiles}</p>
                <Divider />

                <Header> Acquisition Information</Header>
                <p>some information</p>
                <p>some information</p>

                <Divider />

                <Header> Sample Information</Header>
                <p>Location: {sampleLocation}</p>
                <p>Type: {sampleType}</p>
                <p>Date: {sampleDate}</p>
            </div>
        )
    }
}
