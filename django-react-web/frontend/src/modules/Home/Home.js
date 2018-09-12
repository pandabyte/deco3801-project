
import * as React from 'react';
import { Container, Divider, Image, Header, Grid } from 'semantic-ui-react';

import information from './CECEWSN_IMG.png' // relative path to image 
import UserAuthStore from './UserAuthStore';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { observer } from 'mobx-react';

@observer
export default class Home extends React.Component {

    handleFormChange = () => {
        console.log(UserAuthStore.isRegistered);
        UserAuthStore.toggleForm();
    }

    render() {

        const { isRegistered } = UserAuthStore;

        var renderedForm = isRegistered ? <LoginForm /> : <RegistrationForm />;

        return (
            <div>

                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <br />
                            <Header as='h1' content='Test Landing Page' />
                            <Image size={'big'} src={information} />
                            <br />
                        </Grid.Column>

                        <Grid.Column>
                            {renderedForm}

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Header as='h1' content='Test Landing Page' />
                <Image large src='https://i.ytimg.com/vi/XrWuFUSELrg/maxresdefault.jpg' />
                <br />

                <Header as='h1' content='Test Landing Page' />
                <Image large src='https://i.ytimg.com/vi/XrWuFUSELrg/maxresdefault.jpg' />
                <br />

                <Header as='h1' content='Test Landing Page' />
                <Image large src='https://i.ytimg.com/vi/XrWuFUSELrg/maxresdefault.jpg' />
                <br />
            </div>
        )
    }
}