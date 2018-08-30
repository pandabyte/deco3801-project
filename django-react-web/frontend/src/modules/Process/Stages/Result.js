import * as React from 'react';
import { Icon, Divider, Header, Button } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Result extends React.Component {

    componentDidMount = () => {

    }

    render() {


        return (
            <div>
                
                <Header> Processing/Result Stage </Header>

            </div>
        )
    }
}
