// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';

// style sheets
import '../../App.css';
import { Menu, Header } from 'semantic-ui-react';

@observer
export default class Logo extends React.Component {

    render() {

        return (
            <div>
                <Menu.Item>
                    <div className='ui header'>
                        <Header as='h1' content='CECEWSN' />
                        <Header as='h3' content='Chemicals of Emerging Concern ' />
                        <Header as='h3' content='Early Warning Social Network' />
                    </div>
                </Menu.Item>
            </div>
        );
    }
}
