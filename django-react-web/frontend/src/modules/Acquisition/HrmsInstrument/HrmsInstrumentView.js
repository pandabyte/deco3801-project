import * as React from 'react';
import { Segment, Input, Header, Form, Divider } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import HrmsInstrumentStore from './HrmsInstrumentStore';
import Mock from './Mock';

@observer
export default class HrmsInstrumentView extends React.Component {

    componentDidMount() {
        HrmsInstrumentStore.setup();
    }

    createBrandOptions = (arr) => {
        return arr.map((el, index) => {
            return ({
                key: index,
                value: el,
                text: el
            });
        });
    }

    createOptions = (brand, key) => {
        if (Object.keys(Mock.options).includes(brand)) {

            return Mock.options[brand][key].map((el, index) => {
                return ({
                    key: index,
                    value: el,
                    text: el
                });
            })
        } else {
            return [{
                key: 0,
                value: 'default',
                text: 'default'
            }];
        }

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
                sources: newInstrument.sources
            }
        );

        HrmsInstrumentStore.clearNewInstrument();
    }

    onChangeNewInstrument = (e, data) => {
        HrmsInstrumentStore.updateNewInstrumentKeyValue(data.name, data.value);
    }

    render() {

        const { instruments, newInstrument } = HrmsInstrumentStore;
        const brand = newInstrument.brand;
        return (
            <div className='p-5 text-center'>

                <Segment>
                    <Header as='h1'>My Hrms Instrument</Header>
                    <Divider />

                    <Form>
                        {/* New Instrument Form*/}
                        <Form.Group widths='equal'>
                            <Form.Dropdown
                                name='brand' label='Brand' fluid selection
                                value={newInstrument.brand}
                                onChange={this.onChangeNewInstrument}
                                options={this.createBrandOptions(Object.keys(Mock.options))}
                            />

                            <Form.Dropdown
                                name='model' label='Model' fluid selection
                                value={newInstrument.model}
                                onChange={this.onChangeNewInstrument}
                                options={this.createOptions(brand, 'models')}
                            />

                            <Form.Dropdown
                                name='sources' label='Sources' fluid selection
                                value={newInstrument.sources}
                                onChange={this.onChangeNewInstrument}
                                options={this.createOptions(brand, 'sources')}
                            />
                            <Form.Button
                                positive fluid content='add'
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
                </Segment>
            </div>

        )
    }
}
