
import * as React from 'react';
import { observer } from 'mobx-react';
import { Container, Image } from 'semantic-ui-react';

import information from './CECEWSN_IMG.png'; 

@observer
export default class Home extends React.Component {

    render() {

        return (
            <div>
                <Container>
                    <Image size='huge' src={information} />
                    <br />
                </Container>
            </div>
        )
    }
}