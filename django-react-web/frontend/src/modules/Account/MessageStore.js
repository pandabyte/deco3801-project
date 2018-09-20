import { observable, action } from 'mobx';

class MessageStore {

    @observable content = '';
    @observable visible = false;

    @action
    clear = () => {
        this.content = '';
        this.visible = false;
    }

    @action
    createMessageComponent = () {
        return (<Message

        />)
    }


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