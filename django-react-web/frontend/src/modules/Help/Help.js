
import * as React from 'react';
import { Container, Segment, Header, Icon, Accordion, Form } from 'semantic-ui-react';

import HelpStore from './HelpStore';
import { observer } from 'mobx-react';

@observer
export default class Help extends React.Component {

    handleClick = (e, titleProps) => {
        const newIndex = HelpStore.activeIndex === titleProps.index ? -1 : titleProps.index;
        HelpStore.activeIndex = newIndex;
    }

    render() {

        const { activeIndex } = HelpStore;

        return (
            <Container>
                <Header as='h1'> Frequently Asked Questions </Header>

                <Accordion fluid styled>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                        icon={<Icon name='dropdown' />}
                        content={'What is a dog?'}
                    />
                    <Accordion.Content active={activeIndex === 0}>
                        <p>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                            be found as a welcome guest in many households across the world.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                        icon={<Icon name='dropdown' />}
                        content={'What kind of dogs are there?'}
                    />
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
                            select a breed of dog that they find to be compatible with their own lifestyle and
                            desires from a companion.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                        icon={<Icon name='dropdown' />}
                        content={'How do you acquire a dog?'}
                    />
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from pet shops, private
                            owners, or shelters. A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                            owner allows you to assess the pedigree and upbringing of your dog before choosing to
                            take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                            who may not find one so readily.
                        </p>
                    </Accordion.Content>
                </Accordion>

                <Segment>
                    <Header>Ask A Question!</Header>
                    <Form>
                        <Form.Group>
                            <Form.Input placeholder='first name' />
                            <Form.Input placeholder='last name' />
                        </Form.Group>
                        <Form.Input type='email' placeholder='email' />
                        <Form.Input type='TEXT' placeholder='QUESTION AND MESSAGE' />
                    </Form>
                </Segment>
            </Container>
        )
    }
}




