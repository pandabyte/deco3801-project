import * as React from 'react';
import { Segment, Checkbox, Form, Container, Grid, Icon, Image } from 'semantic-ui-react';

import ProfileQuestion from './ProfileQuestion';
import ProfileStore from './ProfileStore';
import { observer } from 'mobx-react';
import UserApi from '../../api/UserApi';

@observer
export default class Profile extends React.Component {

    /* Set up initial states */
    componentDidMount() {
        ProfileStore.setup();
    }

    /* Event handler for saving profile detail changes */
    onSaveChanges = () => {
        UserApi.update(ProfileStore.input).then(res => {
            console.log(res);
            ProfileStore.setup();
        }).catch(err => {
            console.log(JSON.stringify(err));
        })
        
    }

    /* Event handler for canceling profile detail changes */
    onCancelChanges = () => {
        ProfileStore.setup();
    }

    /* Event handler for updating the state of the form inputs on interaction */
    onChange = (e) => {
        ProfileStore.updateInputKeyValue(e.target.name, e.target.value);
    }

    render() {

        const { input } = ProfileStore;

        return (
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>

                            {/* Display picture*/}
                            <Segment>
                                <Image
                                    src='http://www.nyan.cat/cats/original.gif'
                                    size='medium'
                                    rounded centered
                                />
                            </Segment>

                            {/* Form details */}
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid name='first' placeholder='First Name'
                                        onChange={this.onChange}
                                        value={input['first']}
                                        icon={<Icon name='asterisk' />}
                                    />
                                    <Form.Input
                                        fluid name='last' placeholder='Last Name'
                                        onChange={this.onChange}
                                        value={input['last']}
                                        icon={<Icon name='asterisk' />}
                                    />
                                </Form.Group>
                                <Form.Input
                                    name='affiliation' placeholder='Affiliation'
                                    onChange={this.onChange}
                                    value={input['affiliation']}
                                    icon={<Icon name='asterisk' />}
                                />
                                <Form.Input
                                    name='position' placeholder='Position'
                                    onChange={this.onChange}
                                    value={input['position']}
                                />
                                <Form.Input
                                    name='email' placeholder='Email Address'
                                    onChange={this.onChange}
                                    value={input['email']}
                                    icon={<Icon name='asterisk' />}
                                />

                                <Form.Group widths='equal'>
                                    <Form.Button
                                        fluid positive type="button" 
                                        content='Save Changes'
                                        onClick={this.onSaveChanges}
                                    />
                                    <Form.Button
                                        fluid negative type="button" 
                                        content='Cancel Changes'
                                        onClick={this.onCancelChanges}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>

                        <Grid.Column>

                            {/* More form details */}
                            <Form>
                                <Segment fluid='true'>
                                    <Checkbox toggle label={ProfileQuestion.zero} />
                                </Segment>
                                <Form.TextArea
                                    placeholder={ProfileQuestion.one}
                                />
                                <Segment fluid='true'>
                                    <Checkbox toggle label={ProfileQuestion.two} />
                                </Segment>
                                <Segment fluid='true'>
                                    <Checkbox toggle label={ProfileQuestion.three} />
                                </Segment>
                                <Segment fluid='true'>
                                    <Checkbox toggle label={ProfileQuestion.four} />
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}