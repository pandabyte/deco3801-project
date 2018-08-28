import * as React from 'react';
import { Segment, Checkbox, Form, Container, Grid, Icon, Image } from 'semantic-ui-react';

import ProfileQuestion from './ProfileQuestion';
import ProfileStore from './ProfileStore';

export default class Profile extends React.Component {

    componentDidMount() {
        ProfileStore.setup();
    }

    onSaveChanges = () => {
        console.log('saving ' + JSON.stringify(ProfileStore.input));
        ProfileStore.reset();
    }

    onCancelChanges = () => {
        ProfileStore.reset();
        console.log('resetting ' + JSON.stringify(ProfileStore.input));
    }

    /* Event handler for updating the state of the form inputs on interaction */
    onChange = (e) => {
        ProfileStore.updateInputProperty(e.target.name, e.target.value);
    }

    render() {

        const { input } = ProfileStore;
        console.log(JSON.stringify(input));

        return (
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Image
                                src='http://www.nyan.cat/cats/original.gif'
                                size='small'
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Form.Group width='equal'>
                                    <Form.Button
                                        positive type="button" content='Save Changes'
                                        onClick={this.onSaveChanges}
                                    />
                                    <Form.Button
                                        negative type="button" content='Cancel Changes'
                                        onClick={this.onCancelChanges}
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Form>
                                <Form.Group width='2'>
                                    <Form.Input
                                        name='first' placeholder='First Name'
                                        onChange={this.onChange}
                                        value={input['first']}
                                        icon={<Icon name='asterisk' />}
                                    />
                                    <Form.Input
                                        name='last' placeholder='Last Name'
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


                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Segment compact>
                                    <Checkbox toggle label={ProfileQuestion.zero} />
                                </Segment>
                                <Form.TextArea
                                    placeholder={ProfileQuestion.one}
                                />
                                <Segment compact>
                                    <Checkbox toggle label={ProfileQuestion.two} />
                                </Segment>
                                <Segment compact>
                                    <Checkbox toggle label={ProfileQuestion.three} />
                                </Segment>
                                <Segment compact>
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