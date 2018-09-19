import * as React from 'react';
import { Grid, Icon, Divider, Header, Button, Segment, Container, Step, GridRow, GridColumn } from 'semantic-ui-react';
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
            case 'Upload':
                return <Upload />;
            case 'Sample':
                return <Sample />;
            case 'Acquisition':
                return <Acquisition />;
            case 'Configuration':
                return <Config />;
            case 'Process':
                return <Result />;
            default:
                console.log('wot ... no stage selected');
        }
    }


    handleSelectStage = (e) => {
        ProcessStore.activeStage = e.target.id;
    }


    render() {

        const { config, stages, activeStage } = ProcessStore;

        const renderedStageComponent = this.renderStage(activeStage);

        const focusedStage = stages.filter(stage => stage.name === activeStage)[0];

        return (
            <div className='text-left'>
                <Grid>
                    <Grid.Row columns='2'>

                        {/* Stages Navigation Bar */}
                        <Grid.Column width='4'>
                            <Step.Group fluid vertical>
                                {stages.map((stage, index) => {
                                    return (<Step id={stage.name} key={index} active={ProcessStore.activeStage === stage.name} onClick={this.handleSelectStage}>
                                        <Icon name={stage.icon} />
                                        <Step.Content>
                                            <Step.Title>{stage.name}</Step.Title>
                                        </Step.Content>
                                    </Step>)
                                })}
                            </Step.Group>
                        </Grid.Column>

                        {/* Stages Rendered Content*/}
                        <Grid.Column width='12'>

                            {/* display instructions for stage */}
                            <Segment fluid='true'>
                                <Header as='h2'> Instructions for {focusedStage['name']} Stage!</Header>
                                <Divider />
                                {focusedStage['instructions'].map((step, index) => {
                                    return <p key={index}>{step}</p>
                                })}
                            </Segment>

                            <Segment>
                                {/* display stage */}
                                {renderedStageComponent}
                            </Segment>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>





                <Divider />


            </div>
        )
    }
}
