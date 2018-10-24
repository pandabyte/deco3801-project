import { observable, action } from 'mobx';

class MessageStore {

    @observable content = '';
    @observable visible = false;

    /* Clear message states */
    @action
    clear = () => {
        this.content = '';
        this.visible = false;
    }

    /* Create message format */
    getMessage = (color) => {
        // Add color to message component

        if (!this.visible) return;

        return (<Message
            //negative
            content={this.message}
            onDismiss={this.clear}
        />)
    }

}

export default new MessageStore();