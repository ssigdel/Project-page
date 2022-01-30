import { css, html, LitElement } from 'lit';

class ProjectOptions extends LitElement{
    static get styles(){
        return css `
            iron-dropdown{
                background: white;
                border-radius: 5px;
                color: #555;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            .list-item{
                padding: 10px;
                margin: 5px;
            }
        `
    }
    constructor(){
        super();
    }

    render(){
        return html `
            <paper-icon-button icon="more-vert" @click=${this.openDropdown}></paper-icon-button>
            <iron-dropdown id="dropdown" horizontal-align="right">
                <div class="list-item" slot="dropdown-content"><iron-icon icon="info"></iron-icon>View Details</div>
                <div class="list-item" slot="dropdown-content"><iron-icon icon="create"></iron-icon>Edit</div>
                <div class="list-item" slot="dropdown-content"><iron-icon icon="delete"></iron-icon>Delete</div>
            </iron-dropdown>
        `
    }

    openDropdown(){
        this.shadowRoot.querySelector('#dropdown').open()
    }
}

customElements.define('project-options', ProjectOptions)