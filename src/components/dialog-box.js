
import { html, LitElement } from 'lit';

class DialogBox extends LitElement{
    static get properties(){
        return{
            index : {type: Number},
            onDeleteProject : {type: Function},
            closeDialog : {type: Function}
        }
    }
    constructor(){
        super();
        this.index = 0;
        this.onDeleteProject = () => {}
        this.closeDialog = () => {}
    }

    render(){
        return html `
           <paper-dialog class="dialog">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete project?</p>
            <div>
                <paper-button dialog-dismiss @click=${this.closeDialog}>Cancel</paper-button>
                <paper-button dialog-confirm autofocus @click=${this.onDelete}>Delete</paper-button>
            </div>
           </paper-dialog>
        `
    }
    onDelete(){
        this.onDeleteProject(this.index)
        this.closeDialog()
    }
}

customElements.define('dialog-box', DialogBox)