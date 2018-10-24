



import * as React from 'react';
import { observer } from 'mobx-react';
import { Divider, Image, Card, Header, Container, Icon } from 'semantic-ui-react';

import ReactDOM from 'react-dom'

@observer
export default class ForumView extends React.Component {
    constructor() {
        super();
        this.state = {
            iFrameHeight: '0px'
        }
    }

    render() {
        return (
            <iframe
                style={{ maxWidth: 640, width: '100%', height: this.state.iFrameHeight, overflow: 'visible' }}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight": obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }}
                ref="iframe"
                src="ec2-18-224-228-152.us-east-2.compute.amazonaws.com"
                width="100%"
                height={this.state.iFrameHeight}
                scrolling="no"
                frameBorder="0"
            />

        )
    }
}