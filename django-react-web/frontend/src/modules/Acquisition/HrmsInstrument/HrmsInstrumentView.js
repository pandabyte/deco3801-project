import * as React from 'react';
import { Input, Header, Form } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import HrmsInstrumentStore from './HrmsInstrumentStore';
import Mock from './Mock';

@observer
export default class HrmsInstrumentView extends React.Component {

    componentDidMount() {
        HrmsInstrumentStore.setup();
    }

    onRemoveInstrument = (e) => {
        const index = e.target.id;
        HrmsInstrumentStore.instruments.splice(index, 1);
    }

    onAddInstrument = (e) => {
        const { newInstrument } = HrmsInstrumentStore;

        HrmsInstrumentStore.instruments.push(
            {
                brand: newInstrument.brand,
                model: newInstrument.model,
                class: newInstrument.class,
                sources: newInstrument.sources
            }
        );
    }

    onChangeNewInstrument = (e, data) => {
        HrmsInstrumentStore.updateNewInstrumentKeyValue(data.name, data.value);
    }

    render() {

        const { instruments, newInstrument } = HrmsInstrumentStore;

        return (
            <div className='p-5 text-center'>
                <Header as='h1'>Swagger</Header>

                <Form>
                    {/* New Instrument Form*/}
                    <Form.Group widths='equal'>
                        <Form.Dropdown
                            name='brand' label='Brand' fluid selection
                            value={newInstrument.brand}
                            onChange={this.onChangeNewInstrument}
                            options={Mock.brandOptions}
                        />
                        <Form.Dropdown
                            name='model' label='Model' fluid selection
                            value={newInstrument.model}
                            options={Mock.modelOptions}

                        />
                        <Form.Dropdown
                            name='class' label='Class' fluid selection
                            value={newInstrument.class}
                            onChange={this.onChangeNewInstrument}
                            options={Mock.classOptions}

                        />
                        <Form.Dropdown
                            name='sources' label='Sources' fluid selection
                            value={newInstrument.sources}
                            onChange={this.onChangeNewInstrument}
                            options={Mock.sourcesOptions}
                        />
                        <Form.Button
                            positive fluid content='add'
                            onChange={this.onChangeNewInstrument}
                            onClick={this.onAddInstrument}
                        />
                    </Form.Group>

                    {/* Existing Instruments */}
                    {instruments.map((instrument, index) => {
                        return (
                            <Form.Group key={index} widths='equal'>
                                <Form.Field control={Input}
                                    label='Brand' fluid
                                    value={instrument.brand}
                                />
                                <Form.Field control={Input}
                                    label='Model' fluid
                                    value={instrument.model}
                                />
                                <Form.Field control={Input}
                                    label='Class' fluid
                                    value={instrument.class}

                                />
                                <Form.Field control={Input}
                                    label='Sources' fluid
                                    value={instrument.sources}
                                />
                                <Form.Button
                                    id={index}
                                    negative fluid content='remove'
                                    onClick={this.onRemoveInstrument}
                                />
                            </Form.Group>
                        )
                    })}


                </Form>
            </div>
        )
    }
}
