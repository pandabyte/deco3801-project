import * as React from 'react';
import { Icon, Divider, Header, Form } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Sample extends React.Component {

    componentDidMount = () => {

        // icon for add sample information
        // location
        // searchable field that GIS refernces a location
        // type
        // dropdown that allows new types
        // date
        // date
        // icon for upload sample information


        // Save Cancel button
        // Clear if typing


    }

    render() {


        return (
            <div>

                <Header> Sample Stage </Header>

                <Form>
                    <Form.Group widths='equal'>
                        <Form.Button className='p-5' fluid type='button' positive content='Add Sample Information' />
                        <Form.Button className='p-5' fluid type='button' negative content='Upload Sample Information' />
                    </Form.Group>
                </Form>


                <Form>
                    <Form.Group widths='equal'>

                        <Form.Select
                            placeholder='Select Location'
                        />

                        <Form.Select
                            placeholder='Select Type'
                        />

                        <Form.Select
                            placeholder='Select Date'
                        />
                        <Form.Group widths='equal'>
                            <Form.Button fluid type='button' positive content='Save' />
                            <Form.Button fluid type='button' color='orange' content='Cancel' />
                            <Form.Button fluid type='button' negative content='Clear' />
                        </Form.Group>
                    </Form.Group>




                </Form>





            </div>
        )
    }
}
