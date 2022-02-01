import { css, html, LitElement } from 'lit';

const priority = ['High', 'Medium', 'Low']
const type = ['Internal Project', 'External Project']
const status = ['In Progress', 'Hold', 'Attrited', 'Completed']

class ProjectForm extends LitElement{
    static get properties(){
        return{
            formData : {type: Object},
            onAddProject: {type: Function}
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
            .add-btn{
                background: #ff4081;
                color: white;
            }
        `
    }
    constructor(){
        super();
        this.onAddProject = () => {}
        this.formData = { name: '', description: '', priority: '', type: '', status: '', statusDescription: ''}
    }

    onChange(value, name){
        this.formData = {...this.formData, [name]: value}
    }

    onSubmit(){
        this.formData.priority = priority[this.formData.priority]
        this.formData.type = type[this.formData.type]
        this.formData.status = priority[this.formData.status]
        
        this.onAddProject(this.formData)
    }

    render(){
        return html `
        <paper-dialog class="addForm">
        <div class="headings">
            <h3>Add Project</h3>
            <paper-icon-button dialog-dismiss icon="clear"></paper-icon-button>
        </div>
        <iron-form>
        <form action="/" method="post">
       
            <paper-input always-float-label name="name" required auto-validate pattern="[a-zA-Z]*" @input="${(event) => this.onChange(event.target.value, event.target.name)}"  error-message="Please enter text"  label="Name *"></paper-input>

            <paper-textarea always-float-label name="description" required auto-validate pattern="[a-zA-Z]*" @input="${(event) => this.onChange(event.target.value, event.target.name)}" error-message="Please enter text" label="Project Description *"></paper-textarea>

            <paper-dropdown-menu  @iron-select=${(event) => this.onChange(event.target.selected, 'priority')} label="Priority">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>High</paper-item>
                    <paper-item>Medium</paper-item>
                    <paper-item>Low</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu @iron-select=${(event) => this.onChange(event.target.selected, 'type')} label="Project Type">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>Internal Project</paper-item>
                    <paper-item>External Project</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu required @iron-select=${(event) => this.onChange(event.target.selected, 'status')} label="Project Status *">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>In Progress</paper-item>
                    <paper-item>Hold</paper-item>
                    <paper-item>Attrited</paper-item>
                    <paper-item>Completed</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-textarea always-float-label name="statusDescription" @input="${(event) => this.onChange(event.target.value, event.target.name)}" label="Status Description"></paper-textarea>
            
            <paper-button class="add-btn" raised dialog-confirm @click=${this.onSubmit}>Add</paper-button>
            <paper-button dialog-dismiss >Cancel</paper-button>
        </form>
         </iron-form>
        </paper-dialog>
        `
    }
}

customElements.define('project-form', ProjectForm)