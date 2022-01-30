import '@polymer/paper-button/paper-button';
import '@polymer/paper-dialog/paper-dialog';
import { html, LitElement } from 'lit';

class DialogBox extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
           <paper-dialog class="dialog">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete project?</p>
            <div>
                <paper-button dialog-dismiss>Cancel</paper-button>
                <paper-button dialog-confirm autofocus>Delete</paper-button>
            </div>
           </paper-dialog>
        `
    }
}

customElements.define('dialog-box', DialogBox)