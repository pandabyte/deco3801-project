import * as React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';

export default class Process extends React.Component {

    render() {
        return (
            <div>
                <Icon name='upload' size='massive' />
                <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='massive' />
                <Icon name='keyboard' size='massive' />
                <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='massive' />
                <Icon name='setting' size='massive' />
                <Icon style={{ 'margin': '25px' }} name='arrow alternate circle right' size='massive' />
                <Icon name='google play' size='massive' />
            </div>
        )
    }
}
