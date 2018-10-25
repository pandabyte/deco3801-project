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

        if (!this.visible) return;

        return (<Message
            content={this.message}
            onDismiss={this.clear}
        />)
    }
}

export default new MessageStore();