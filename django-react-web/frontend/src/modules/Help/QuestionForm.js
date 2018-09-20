
import * as React from 'react';
import { Segment, Header, Form } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import HelpStore from './HelpStore';

@observer
export default class QuestionForm extends React.Component {

    /* Event handler for when the new question form input changes */
    onNewQuestionFormChange = (e) => {
        HelpStore.updateFormKeyValue(e.target.name, e.target.value);
    }

    /* Event handler for submitting the new question form */
    onNewQuestionFormSubmit = (e) => {
        HelpStore.clear();
    }

    render() {

        const { form } = HelpStore;

        return (
            <Segment className='p-4'>
                <Header as='h1'> Ask A Question! </Header>
                <Form onSubmit={this.onNewQuestionFormSubmit}>

                    <Form.Group widths='equal'>
                        <Form.Input
                            name='firstname' fluid placeholder='first name'
                            onChange={this.onNewQuestionFormChange}
                            value={form['firstname']}
                        />
                        <Form.Input
                            name='lastname' fluid placeholder='last name'
                            onChange={this.onNewQuestionFormChange}
                            value={form['lastname']}
                        />
                    </Form.Group>

                    <Form.Input
                        name='email' type='email' placeholder='email'
                        onChange={this.onNewQuestionFormChange}
                        value={form['email']}
                    />

                    <Form.TextArea
                        name='text' type='text' placeholder='enter message'
                        onChange={this.onNewQuestionFormChange}
                        value={form['text']}
                    />

                    <Form.Button type='submit' content='Submit Question!' />
                </Form>
            </Segment>
        )
    }
}




