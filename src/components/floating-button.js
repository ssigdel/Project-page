import '@polymer/paper-fab/paper-fab';
import { css, html, LitElement } from 'lit';

class FloatingButton extends LitElement{
    static get styles(){
        return css `
            paper-fab{
                 position: fixed;
                 bottom: 3%;
                 right: 3%;
            }
        `
    }

    constructor(){
        super();
    }

    render(){
        return html `
            <paper-fab src="../icons/plus-solid.svg"></paper-fab>
        `
    }
}

customElements.define('floating-button', FloatingButton)