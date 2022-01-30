import '@polymer/paper-fab/paper-fab';
import { css, html, LitElement } from 'lit';

class FloatingButton extends LitElement{
    static get properties(){
        return {
            onButtonClick : {type: Function},
        }
    }
    
    static get styles(){
        return css `
            paper-fab{
                 position: fixed;
                 bottom: 2%;
                 right: 2%;
            }
        `
    }

    constructor(){
        super();

        this.onButtonClick = () => {}
    }
    
    handleFloatingBtnClick(){
      
        this.onButtonClick()
    }

    render(){
        return html `
            <paper-fab src="../icons/plus-solid.svg" @click=${this.handleFloatingBtnClick}></paper-fab>
        `
    }
}

customElements.define('floating-button', FloatingButton)