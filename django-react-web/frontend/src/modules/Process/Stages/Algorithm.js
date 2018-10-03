import * as React from 'react';
import { Checkbox, Segment, Header, Form } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Algorithm extends React.Component {


    onChangeAlgorithm = (e, data) => {
        ProcessStore.data.algorithm.algorithm = data.value;
    }

    render() {

        const { data } = ProcessStore;

        const algorithms = ['ImportDeconv_v1', 'LibrarySearch_v1', 'DeconvLibrarySearch_v1'];

        return (
            <div>
                <Segment>
                    <Header as='h2' content='Choose argument setting' />
                    
                </Segment>

                <Segment>
                    <Header as='h2'> Choose algorithm </Header>

                    <Form>

                        {algorithms.map(algo => {
                            return (
                                <Form.Field>
                                    <Checkbox
                                        radio
                                        label={algo}
                                        name='checkboxRadioGroup'
                                        checked={data.algorithm.algorithm === algo}
                                        onChange={this.onChangeAlgorithm}
                                    />
                                </Form.Field>
                            );
                        })}
                    </Form>
                </Segment>


            </div>
        )
    }
}
