import * as React from 'react';
import { Icon, Divider, Header, Button } from 'semantic-ui-react';
import ProcessStore from './ProcessStore';
import { observer } from 'mobx-react';


import Upload from './Stages/Upload';
import Sample from './Stages/Sample';
import Acquisition from './Stages/Acquisition';
import Config from './Stages/Config';
import Result from './Stages/Result';

@observer
export default class Process extends React.Component {

    componentDidMount = () => {
        ProcessStore.setup();
    }

    /* Updates the selected stage */
    onIconClick = (e) => {
        ProcessStore.updateProperty('stage', e.target.id);
    }

    /* Renders the component based on the stage that is selected */
    renderStage = (stage) => {
        switch (stage) {
            case 'upload':
                return <Upload />;
            case 'sample':
                return <Sample />;
            case 'acquisition':
                return <Acquisition />;
            case 'config':
                return <Config />;
            case 'result':
                return <Result />;
            default:
                console.log('wot ... no stage selected');
        }
    }


    render() {

        const { config } = ProcessStore;
        const title = config['stage'];

        const renderedStageComponent = this.renderStage(config['stage']);

        return (
            <div>
                <div className='text-center'>
                    <Icon name='upload' size='massive' id='upload' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='keyboard' size='massive' id='sample' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='setting' size='massive' id='acquisition' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='adjust' size='massive' id='config' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='google play' size='massive' id='result' onClick={this.onIconClick} />
                </div>

                <Divider />

                <Header as='h3'> {title} </Header>

                {renderedStageComponent}

            </div>
        )
    }
}
