import { css, html, LitElement } from 'lit';

const priority = [{id: 0, value: 'high'}, {id: 1, value: 'medium'}, {id: 2, value: 'low'}]

class ProjectForm extends LitElement{
    static get properties(){
        return{
            formData : {type: Object}
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
        this.formData = { name: '', description: '', priority: ''}
    }

    onChange(value, name){
        this.formData = {...this.formData, [name]: value}
        console.log(this.formData)
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
       
            <paper-input always-float-label name="name" required auto-validate pattern="[a-zA-Z]*" @input="${(event) => this.onChange(event.target.value, event.target.name)}"  error-message="Please enter text only!"  label="Name"></paper-input>

            <paper-textarea always-float-label name="description" @input="${(event) => this.onChange(event.target.value, event.target.name)}" required label="Project Description"></paper-textarea>

            <paper-dropdown-menu @iron-select=${(event) => this.onChange(event.target.selected, 'priority')} label="Priority">
                <paper-listbox slot="dropdown-content" id="priority">
                    <paper-item item-name=${priority[0]['value']}>${priority[0].value}</paper-item>
                    <paper-item item-name=${priority[0]['value']}>${priority[1].value}</paper-item>
                    <paper-item item-name=${priority[0]['value']}>${priority[2].value}</paper-item>
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
            <paper-button dialog-dismiss >Cancel</paper-button>
        </form>
         </iron-form>
        </paper-dialog>
        `
    }
}

customElements.define('project-form', ProjectForm)