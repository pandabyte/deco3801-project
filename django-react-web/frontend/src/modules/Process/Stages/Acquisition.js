import * as React from 'react';
import { Icon, Form, Header, Segment } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Acquisition extends React.Component {

    onChangeInstrument = (e, data) => {
        ProcessStore.updateInstrumentKeyValue(data.name, data.value);
    }
    render() {

        const {instrument} = ProcessStore;

        return (
            <div>

                <Segment>
                    <Header as='h2' content='Choose HRMS' />

                    <Form>

                        <Form.Group widths='equal'>

                            <Form.Dropdown
                                name='instrument' label='instrument' fluid selection
                                value={instrument.name}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='source' label='source' fluid selection
                                value={instrument.source}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='mode' label='mode' fluid selection
                                value={instrument.mode}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='sourceVoltage' label='sourceVoltage' fluid selection
                                value={instrument.sourceVoltage}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='sourceGas1' label='sourceGas1' fluid selection
                                value={instrument.sourceGas1}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='sourceGas2' label='sourceGas2' fluid selection
                                value={instrument.sourceGas2}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                            <Form.Dropdown
                                name='curtainGas' label='curtainGas' fluid selection
                                value={instrument.curtainGas}
                                onChange={this.onChangeInstrument}
                                options={[{text: '1', value: '1'}]}
                            />
                        </Form.Group>
                    </Form>

                </Segment>

                <Segment>
                    <Header as='h2' content='Choose Chromatopgraphy System' />
                </Segment>

            </div>
        )
    }
}
