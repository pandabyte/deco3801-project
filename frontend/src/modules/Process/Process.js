import * as React from 'react';
import { Icon, Divider, Header } from 'semantic-ui-react';
import ProcessStore from './ProcessStore';

export default class Process extends React.Component {

    componentDidMount = () => {
        ProcessStore.setup();
    }

    onIconClick = (e) => {

        // change title
        ProcessStore.updateProperty('stage', e.target.id)
    }
    render() {

        const { config, title} = ProcessStore;

        return (
            <div>
                <div>
                    <Icon name='upload' size='massive' id='upload' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='keyboard' size='massive' id='tools' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='setting' size='massive' id='config' onClick={this.onIconClick} />
                    <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='big' />
                    <Icon name='google play' size='massive' id='process' onClick={this.onIconClick} />
                </div>

                <Divider />

                <Header as='h3'> {title} </Header>
                <p>asdfasdf</p>
                <p>fasdf</p>
            </div>
        )
    }
}
