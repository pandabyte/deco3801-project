
import * as React from 'react';
import { Container, Divider, Image, Header} from 'semantic-ui-react';


export default class Home extends React.Component {

    render() {
        return (
            <div>
                <br />
                <Header as='h1' content='Test Landing Page' />
                <Image large src='https://i.ytimg.com/vi/XrWuFUSELrg/maxresdefault.jpg' />
                <br />

            </div>
        )
    }
}