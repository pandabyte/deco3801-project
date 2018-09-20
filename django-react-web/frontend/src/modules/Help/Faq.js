
import * as React from 'react';
import { Segment, Header, Icon, Accordion } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import HelpStore from './HelpStore';
import mock from './mock';

@observer
export default class QuestionForm extends React.Component {

    /* Click event handler for FAQ */
    onAccordionClick = (e, titleProps) => {
        const newIndex = HelpStore.activeIndex === titleProps.index ? -1 : titleProps.index;
        HelpStore.activeIndex = newIndex;
    }

    render() {

        const { activeIndex } = HelpStore;

        return (
            
            <Segment className='p-4'>

                {/* Map question and answers to a dropdown accordion component */}
                <Header as='h1'> Frequently Asked Questions! </Header>
                <Accordion fluid styled>
                    {mock.map((el, index) => {
                        return (<div key={index}>
                            <Accordion.Title
                                active={activeIndex === index}
                                index={index}
                                onClick={this.onAccordionClick}
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
        )
    }
}




