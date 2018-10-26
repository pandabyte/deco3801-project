import * as React from 'react';
import { Header, Label, Segment, Button, Icon, Input, Table } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Upload extends React.Component {

    onChangeSingleFile = (e) => {
        console.log(e.target.files);
        ProcessStore.updateSelectedFiles(e.target.files);
        ProcessStore.updateProperty('isSingleFile', true);
    }

    onChangeMultipleFile = (e) => {
        console.log(e.target.files);
        ProcessStore.updateSelectedFiles(e.target.files);
        ProcessStore.updateProperty('isSingleFile', false);
    }

    render() {


        const { selectedFiles } = ProcessStore;
        console.log('files', selectedFiles);
        const keys = Object.keys(selectedFiles);
        var files = [];
        keys.forEach(key => {
            files.push(selectedFiles[key]);
        });
        let uploadUrl = '/upload/?token=' + localStorage.getItem('access')
        return (
            <div>
                {/* Form to select files */}
                <Segment className='text-center p-4'>
                    <div className='d-inline-block p-4'>
                        
                        <Label
                            as="label" htmlFor="singleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Single File
                        </Label>
                        
                        <input
                            id="singleFile" hidden type="file"
                            onChange={this.onChangeSingleFile}
                        /><br />

                    </div>
                    

                    <div className='d-inline-block p-5'>
                        <Label
                            as="label" htmlFor="multipleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Multiple File
                        </Label>
                        <input
                            id="multipleFile" hidden type="file" multiple
                            onChange={this.onChangeMultipleFile}
                        />
                    </div>
                </Segment>
                <a href={uploadUrl}><small>Test upload link</small></a>
                <br />

                {/* Table to display currently selected files */}
                <Segment className='text-left p-4'>
                    <Header as='h3'> Currently Selected Files </Header>

                    <Table celled singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Size</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {files.map((file, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell> {file['name']} </Table.Cell>
                                        <Table.Cell> {file['size']} </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </Segment>                    

            </div>
        )
    }
}
