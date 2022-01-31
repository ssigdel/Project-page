import { css, html, LitElement } from 'lit';

class ProjectForm extends LitElement{
    static get properties(){
        return{
            name: {type: String},
            description: {type: String},
            projectType : {type: String}
        }
    }
    static get styles(){
        return css `
            paper-dialog{
                width: 30%;
                border-radius: 10px;
            }
            paper-dropdown-menu{
                width: 100%;
            }
            .headings{
                display: flex;
                justify-content: space-between;
            }
        `
    }
    constructor(){
        super();
        this.name = ''
        this.description = ''
    }

    onChange(event){
        switch(event.target.name){
            case 'name':
                this.name = event.target.value
                break;
            case 'description':
                this.description = event.target.value
                break;
        }
       
    }

    onSubmit(){
        console.log('clicked')
        console.log(this.name, this.description)
    }

    render(){
        return html `
        <paper-dialog class="addForm">
        <div class="headings">
            <h3>Add Project</h3>
            <paper-icon-button dialog-confirm icon="clear"></paper-icon-button>
        </div>
        <iron-form>
        <form action="/" method="post">
       
            <paper-input always-float-label name="name" required auto-validate pattern="[a-zA-Z]*" @change="${this.onChange}"  error-message="Please enter text only!"  label="Name"></paper-input>

            <paper-textarea always-float-label name="description" @change="${this.onChange}" required label="Project Description"></paper-textarea>

            <paper-dropdown-menu label="Priority">
                <paper-listbox slot="dropdown-content" id="priority" selected="1">
                    <paper-item value="high">High</paper-item>
                    <paper-item value="medium">Medium</paper-item>
                    <paper-item value="low">Low</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu id="type" label="Project Type">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>Internal Project</paper-item>
                    <paper-item>External Project</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu id="status" label="Project Status">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>In Progress</paper-item>
                    <paper-item>Hold</paper-item>
                    <paper-item>Attrited</paper-item>
                    <paper-item>Completed</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-textarea always-float-label id="status-desc" label="Status Description"></paper-textarea>
            
            <paper-button raised dialog-confirm @click=${this.onSubmit}>Add</paper-button>
            <paper-button dialog-confirm >Cancel</paper-button>
        </form>
         </iron-form>
        </paper-dialog>
        `
    }
}

customElements.define('project-form', ProjectForm)