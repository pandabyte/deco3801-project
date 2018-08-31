import * as React from 'react';
import { Icon, Divider, Header, Button } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Result extends React.Component {

    componentDidMount = () => {

    }

    upload = () => {
        /*
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('domain', formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        })
        */
    }

    render() {

        return (
            <div>

                <Header> Processing/Result Stage </Header>

                
            </div>
        )
    }
}
