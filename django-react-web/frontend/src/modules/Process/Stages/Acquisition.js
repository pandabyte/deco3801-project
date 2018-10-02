import * as React from 'react';
import { Icon, Divider, Header, Segment } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Acquisition extends React.Component {

    render() {

        return (
            <div>
                
                <Segment>
                    <Header as='h2' content='Choose HRMS' />
                </Segment>

                <Segment>
                    <Header as='h2' content='Choose Chromatopgraphy System' />
                </Segment>

            </div>
        )
    }
}
