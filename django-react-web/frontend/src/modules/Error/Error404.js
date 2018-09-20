// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';

import { Header } from 'semantic-ui-react';

@observer
export default class Error404 extends React.Component {

    render() {
        return (
            
            <div>
                <Header>Error Page</Header>
            </div>

        );
    }
}
