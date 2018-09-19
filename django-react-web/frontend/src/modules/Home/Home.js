
import * as React from 'react';
import { Container, Divider, Image, Header, Grid, Icon } from 'semantic-ui-react';

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