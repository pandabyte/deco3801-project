import * as React from 'react';
import { Header } from 'semantic-ui-react'


export default class AppHeader extends React.Component {

    render() {
        return (
            <div className='bg-dark'>
                <br />
                <Header className='text-center text-success' as='h1' content='CECEWSN' />
                <Header className='text-center text-success' as='h2' content='Chemicals of Emerging Concern Early Warning Social Network' />
                <br />
                <br />
            </div>
        )
    }
}
