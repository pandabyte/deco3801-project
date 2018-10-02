// import dependencies
import * as React from 'react';
import { observer } from 'mobx-react';

import { Header, Divider } from 'semantic-ui-react';

@observer
export default class Error404 extends React.Component {

    render() {
        return (

            <div className='text-center'>
                <div style={{ fontSize: '150px' }}>
                    <p><strong>4<span style={{ color: 'red' }}>0</span>4</strong></p>
                </div>
                <Divider />
                <div style={{ fontSize: '50px' }}>
                    <p>Oops! The page you requested could not be found...</p>
                </div>
            </div>

        );
    }
}
