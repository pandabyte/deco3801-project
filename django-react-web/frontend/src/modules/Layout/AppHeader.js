import * as React from 'react';
import { Header } from 'semantic-ui-react'

export default class AppHeader extends React.Component {
    render() {
        return (
            <div className='text-center p-5 App-header'>
                <Header className='text-light' as='h2' content='Chemicals of Emerging Concern Early Warning Social Network' />
            </div>

        )
    }
}