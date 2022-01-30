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
                <div class="projects">
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
            </div>
            <floating-button .onButtonClick=${this.handleBtnClick}></floating-button>
            <project-form class="form"></project-form>
        `
    }
}

customElements.define('main-element', MainElement)