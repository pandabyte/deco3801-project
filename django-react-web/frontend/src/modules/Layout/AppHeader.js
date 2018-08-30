import * as React from 'react';
import { Header } from 'semantic-ui-react'


export default class AppHeader extends React.Component {

    render() {
        return (
            <div className='App-Header'>
                <br />
                <Header className='App-Header-Text' as='h1' content='CECEWSN' />
                <Header className='App-Header-Text' as='h3' content='Chemicals of Emerging Concern Early Warning Social Network' />
                <br />
            </div>
        )
    }
}
