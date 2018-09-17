import * as React from 'react';
import { Header, Form } from 'semantic-ui-react'


export default class AppHeader extends React.Component {

    render() {
        return (
            <div className='bg-secondary text-center p-5'>
                <Header className='text-success' as='h1' content='CECEWSN' />
                <Header className='text-success' as='h2' content='Chemicals of Emerging Concern Early Warning Social Network' />
            </div>

        )
    }
}