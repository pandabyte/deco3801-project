
import * as React from 'react';
import { Segment, Header, Icon, Accordion, Form } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import HelpStore from './HelpStore';
import mock from './mock';

@observer
export default class Help extends React.Component {

    /* Click event handler for FAQ */
    onAccordionClick = (e) => { }

    /* Event handler for when the new question form input changes */
    onNewQuestionFormChange = (e) => { }

    /* Event handler for submitting the new question form */
    onNewQuestionFormSubmit = (e) => { }


    handleClick = (e, titleProps) => {
        const newIndex = HelpStore.activeIndex === titleProps.index ? -1 : titleProps.index;
        HelpStore.activeIndex = newIndex;
    }

    handleChange = (e) => {
        HelpStore.updateFormProperty(e.target.name, e.target.value);
    }

    handleSubmitQuestion = () => {
        console.log("submitting the following form data\n", JSON.stringify(HelpStore.form));
        HelpStore.clear();
    }

    render() {

        const { activeIndex, form } = HelpStore;

        return (


            <div className='text-left p-5'>

                {/* Form for submitting a new question */}
                <Segment className='p-4'>
                    <Header as='h1'> Ask A Question! </Header>
                    <Form onSubmit={this.handleSubmitQuestion}>
                        <Form.Group widths='equal'>
                            <Form.Input
                                name='firstname'
                                fluid placeholder='first name'
                                onChange={this.handleChange}
                                value={form['firstname']}
                            />
                            <Form.Input
                                name='lastname'
                                fluid placeholder='last name'
                                onChange={this.handleChange}
                                value={form['lastname']}
                            />
                        </Form.Group>

                        <Form.Input
                            name='email'
                            type='email' placeholder='email'
                            onChange={this.handleChange}
                            value={form['email']}
                        />
                        <Form.TextArea
                            name='text'
                            type='text' placeholder='enter message'
                            onChange={this.handleChange}
                            value={form['text']}
                        />
                        <Form.Button type='submit' content='Submit Question!' />
                    </Form>
                </Segment>

                {/* 
                    <Question Form />
                    <br />
                    <Faq />
                */}

                <br />

                {/* Form for submitting a new question */}
                <Segment className='p-4'>

                    {/* Map question and answers to a dropdown accordion component */}
                    <Header as='h1'> Frequently Asked Questions! </Header>
                    <Accordion fluid styled>
                        {mock.map((el, index) => {
                            return (<div key={index}>
                                <Accordion.Title
                                    active={activeIndex === index}
                                    index={index}
                                    onClick={this.handleClick}
                                    icon={<Icon name='dropdown' />}
                                    content={el.question}
                                />
                                <Accordion.Content active={activeIndex === index}>
                                    <p> {el.answer} </p>
                                </Accordion.Content>
                            </div>)
                        })}
                    </Accordion>
                </Segment>

            </div>
        )
    }
}




