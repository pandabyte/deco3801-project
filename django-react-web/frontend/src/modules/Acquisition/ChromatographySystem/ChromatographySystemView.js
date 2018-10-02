import * as React from 'react';
import { Segment, Input, Header, Form, Divider } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import ChromatographySystemStore from './ChromatographySystemStore';
import Mock from './Mock';

@observer
export default class ChromatographySystemView extends React.Component {

    componentDidMount() {
        ChromatographySystemStore.setup();
    }

    onRemoveSystem = (e) => {
        const index = e.target.id;
        ChromatographySystemStore.systems.splice(index, 1);
    }

    onAddSystem = (e) => {
        const { newSystem } = ChromatographySystemStore;

        ChromatographySystemStore.systems.push(
            {
                brand: newSystem.brand,
                class: newSystem.class
            }
        );
    }

    onChangeNewSystem = (e, data) => {
        ChromatographySystemStore.updateNewSystemKeyPair(data.name, data.value);
    }

    render() {

        const { systems, newSystem } = ChromatographySystemStore;

        return (
            <div className='p-5 text-center'>

                <Segment>
                    <Header as='h1'>My Chromatography Systems</Header>
                    <Divider />

                    <Form>
                        {/* New System Form*/}
                        <Form.Group widths='equal'>
                            <Form.Dropdown
                                name='brand' label='Brand' fluid selection
                                value={newSystem.brand}
                                onChange={this.onChangeNewSystem}
                                options={Mock.brandOptions}
                            />
                            <Form.Dropdown
                                name='class' label='Class' fluid selection
                                value={newSystem.class}
                                onChange={this.onChangeNewSystem}
                                options={Mock.classOptions}

                            />
                            <Form.Button
                                positive fluid content='add'
                                onClick={this.onAddSystem}
                            />
                        </Form.Group>

                        {/* Existing Systems */}
                        {systems.map((system, index) => {
                            return (
                                <Form.Group key={index} widths='equal'>
                                    <Form.Field control={Input}
                                        label='Brand' fluid
                                        value={system.brand}
                                    />
                                    <Form.Field control={Input}
                                        label='Class' fluid
                                        value={system.class}
                                    />

                                    <Form.Button
                                        id={index}
                                        negative fluid content='remove'
                                        onClick={this.onRemoveSystem}
                                    />
                                </Form.Group>
                            )
                        })}
                    </Form>
                </Segment>
            </div>

        )
    }
}
