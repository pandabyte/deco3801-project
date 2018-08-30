import * as React from 'react';
import { Header, Label, Button, Icon, Input, Form } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Upload extends React.Component {

    onUploadSingleFile = (e) => {
        console.log("uploading single file");

    }

    onUploadMultipleFile = (e) => {
        console.log("uploading multiple file");
    }


    render() {


        return (
            <div>

                <Header> Uploading Stage </Header>

                <div >

                    <div className='d-inline-block'>
                        <Label as="label" htmlFor="singleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Single File
                    </Label>
                        <input id="singleFile" hidden type="file" />
                    </div>

                    <div className='d-inline-block'>
                        <Label as="label" htmlFor="multipleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Multiple File
                    </Label>
                        <input id="multipleFile" hidden type="file" multiple />
                    </div>
                </div>


            </div>
        )
    }
}
