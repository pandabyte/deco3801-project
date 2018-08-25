import * as React from 'react';
import { Header } from 'semantic-ui-react'

export default class AppHeader extends React.Component {

    render() {
        return (
            <div className='ui inverted header segment'>
                <Header as='h1' className='text-left'> Header </Header>
            </div>
        )
    }
}
