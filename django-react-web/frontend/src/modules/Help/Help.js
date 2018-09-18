
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
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='first name' />
                            <Form.Input fluid placeholder='last name' />
                        </Form.Group>
                        <Form.Input type='email' placeholder='email' />
                        <Form.Input type='TEXT' placeholder='QUESTION AND MESSAGE' />
                    </Form>
                </Segment>
            </Container>
        )
    }
}




