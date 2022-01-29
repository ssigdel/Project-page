import { html, LitElement } from 'lit';

class ContainerElement extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <nav-bar></nav-bar>
            <floating-button></floating-button>
        `
    }
}

customElements.define('container-element', ContainerElement)