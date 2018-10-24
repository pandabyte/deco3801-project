
import * as React from 'react';
import { observer } from 'mobx-react';
import { Divider, Image, Card, Header, Container, Icon } from 'semantic-ui-react';

import information from './CECEWSN_IMG.png';

@observer
export default class Home extends React.Component {
    render() {
        const cards = [
            {
                header: 'Collaborative',
                text: [
                    'Work together with other environmental chemist',
                    'View workings from other chemiest'
                ]
            },
            {
                header: 'Ease of Use',
                text: [
                    'Instructions', 'FAQs', 'Documentations'
                ]
            },
            {
                header: 'History',
                text: [
                    'See what has been processed',
                    'Reuse configurations'
                ]
            }
        ];

        return (
            <div className='text-center'>
                <div className='home-top-div'>
                    <br />
                    <br />
                    <div style={{ width: '300px', display: 'inline-block' }}>
                        <h1> CECEWSN </h1>
                        <Divider />
                    </div>
                    <p><em>Changing the world one chemical compound at a time</em></p>
                    <br />
                    <br />
                </div>
                <div className='home-mid-div'>
                    <Card.Group itemsPerRow={3} className='p-5'>
                        {cards.map((card, index) => {
                            return (
                                <Card key={index} fluid className='text-left'>
                                    <Card.Content>
                                        <Card.Header><Header as='h2'>{card.header}</Header></Card.Header>
                                    </Card.Content>
                                    <Card.Content>


                                        <Card.Description>
                                            <ul>
                                                {card.text.map((text, index) => {
                                                    return <li key={index}> key={text}>{text}</li>
                                                })}
                                            </ul>

                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
                </div>

                <div className='home-bot-div'>
                    <Container className='text-center'>
                        <Image size='huge' src={information} />
                    </Container>
                </div>
            </div>
        )
    }
}