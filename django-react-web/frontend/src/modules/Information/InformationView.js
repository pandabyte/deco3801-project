import * as React from 'react';
import _ from 'lodash'
import faker from 'faker'

import { Header, Search, Divider, Segment } from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
export default class InformationView extends React.Component {


    render() {
        return (
            <div className='p-5'>
                <Header as='h1'> Information </Header>
            </div>
        )
    }
}
