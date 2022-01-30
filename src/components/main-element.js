import { css, html, LitElement } from 'lit';

class MainElement extends LitElement{
    static get styles(){
        return css `
            .wrapper{
                margin: 5%;
            }

        `
    }
    constructor(){
        super();

        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick(){
        this.shadowRoot.querySelector('.form').shadowRoot.querySelector('.addForm').open();
    }

    render(){
        return html `
            <nav-bar></nav-bar>
            <div class="wrapper">
                <div>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                     <project-card></project-card>
                </div>
                <project-form class="form"></project-form>
                <floating-button .onButtonClick=${this.handleBtnClick}></floating-button>
            </div>
        `
    }
}

customElements.define('main-element', MainElement)