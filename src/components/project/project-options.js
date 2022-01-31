import { css, html, LitElement } from 'lit';

class ProjectOptions extends LitElement{
    static get properties(){
        return {
            index: {type: Number},
            onDeleteProject: {type: Function}
        }
    }
    static get styles(){
        return css `
            iron-dropdown{
                background: white;
                border-radius: 5px;
                color: #555;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            .list-item{
                padding: 5px;
                margin: 5px;
            }
        `
    }
    constructor(){
        super();
        this.index = 0
        this.onDeleteProject = () => {}
        this.handleCancelClick = this.handleCancelClick.bind(this)
    }

    render(){
        return html `
            <paper-icon-button icon="more-vert" @click=${this.openDropdown}></paper-icon-button>
            <iron-dropdown id="dropdown" horizontal-align="right">
                <div class="list-item" slot="dropdown-content"><paper-icon-button icon="info"></paper-icon-button>View Details</div>
                <div class="list-item" slot="dropdown-content"><paper-icon-button icon="create"></paper-icon-button>Edit</div>
                <div class="list-item" slot="dropdown-content"><paper-icon-button @click=${this.handleDeleteClick} icon="delete"></paper-icon-button>Delete</div>
            </iron-dropdown>
            <dialog-box class="box" index=${this.index} .onCancelClick=${this.handleCancelClick} .onDeleteProject=${this.onDeleteProject}></dialog-box>
        `
    }

    handleCancelClick(){
        this.shadowRoot.querySelector('#dropdown').close()
    }

    handleDeleteClick(){
        this.shadowRoot.querySelector('.box').shadowRoot.querySelector('.dialog').open()
    }

    openDropdown(){
        this.shadowRoot.querySelector('#dropdown').open()
    }
}

customElements.define('project-options', ProjectOptions)