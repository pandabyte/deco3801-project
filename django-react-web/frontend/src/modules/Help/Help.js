
import * as React from 'react';
import { Container, Segment, Header, Icon, Accordion, Form } from 'semantic-ui-react';

import HelpStore from './HelpStore';
import { observer } from 'mobx-react';

import mock from './mock';


@observer
export default class Help extends React.Component {

    handleClick = (e, titleProps) => {
        const newIndex = HelpStore.activeIndex === titleProps.index ? -1 : titleProps.index;
        HelpStore.activeIndex = newIndex;
    }

    handleChange = (e) => {
        HelpStore.updateFormProperty(e.target.name, e.target.value);
    }

    handleSubmitQuestion = () => {
        console.log("submitting the following form data\n", JSON.stringify(HelpStore.form));
    }

    render() {

        const { activeIndex } = HelpStore;

        return (
            <Container className='text-left'>
                <Segment>
                    <Header as='h1'> Frequently Asked Questions! </Header>

                    {/* Map question and answers to a dropdown accordian component */}
                    <Accordion fluid styled>
                        {mock.map((el, index) => {
                            return (<div>
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
                            </div>
                            )
                        })}
                    </Accordion>
                </Segment>

                <Segment>
                    <Header as='h1'> Ask A Question! </Header>
                    <Form onSubmit={this.handleSubmitQuestion}>

                        <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='first name' onChange={this.handleChange} />
                            <Form.Input fluid placeholder='last name' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Input type='email' placeholder='email' onChange={this.handleChange} />
                        <Form.TextArea type='TEXT' placeholder='QUESTION AND MESSAGE' onChange={this.handleChange} />
                        <Form.Button type='submit' content='Submit Question!' />
                    </Form>
                </Segment>
            </Container>
        )
    }
}




