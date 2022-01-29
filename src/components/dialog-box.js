import { html, LitElement } from 'lit';

class DialogBox extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <h1>Dialog Box</h1>
        `
    }
}

customElements.define('dialog-box', DialogBox)