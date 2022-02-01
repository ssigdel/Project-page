import { css, html, LitElement } from 'lit';

const priority = ['High', 'Medium', 'Low']
const type = ['Internal Project', 'External Project']
const status = ['In Progress', 'Hold', 'Attrited', 'Completed']
const pipelines = ['ASP Pipeline', 'Antibody Pipeline']
const stages = ['Lead Identification', 'Lead Verification']

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
                padding: 5px;
            }
            .pipeline-content paper-dropdown-menu{
                width: 42%;
                margin: 10px;
            }
            paper-input{
                margin: 0 5px;
            }
            paper-button{
                margin: 5px;
            }
            paper-dropdown-menu{
                margin: 10px 0;
            }
        `
    }
    constructor(){
        super();
        this.onAddProject = () => {}
        this.formData = { name: '', description: '', priority: '', type: '', status: '', statusDescription: '', pipelines: '', stages: ''}
    }

    onChange(value, name){
        this.formData = {...this.formData, [name]: value}
    }

    onSubmit(){
       let validate = this.shadowRoot.querySelector('iron-form').validate()

       if(validate){
        this.formData.priority = priority[this.formData.priority]
        this.formData.type = type[this.formData.type]
        this.formData.status = status[this.formData.status]
        this.formData.pipelines = [pipelines[this.formData.pipelines]]
        this.formData.stages = [stages[this.formData.stages]]

        this.onAddProject(this.formData)

        this.shadowRoot.querySelector('iron-form').reset()
       }
    }

    onCancel(){
        this.shadowRoot.querySelector('iron-form').reset()
    }

    render(){
        return html `
        <paper-dialog class="addForm">
        <div class="headings">
            <h2>Add Project</h2>
            <paper-icon-button dialog-dismiss icon="clear"></paper-icon-button>
        </div>
        <paper-dialog-scrollable>
        <iron-form>
        <form action="/" method="post">
       
            <paper-input always-float-label name="name" required auto-validate @input="${(event) => this.onChange(event.target.value, event.target.name)}"  error-message="Please fill out this field"  label="Name *"></paper-input>
            <div>
                <h4>Pipeline(s)</h4>
                <div class="pipeline-content">
                    <paper-dropdown-menu required auto-validate @iron-select=${(event) => this.onChange(event.target.selected, 'pipelines')} label="Pipeline" error-message="Please fill out this field">
                        <paper-listbox slot="dropdown-content">
                            <paper-item>ASP Pipeline</paper-item>
                            <paper-item>Antibody Pipeline</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-dropdown-menu required auto-validate @iron-select=${(event) => this.onChange(event.target.selected, 'stages')} label="Stages" error-message="Please fill out this field">
                        <paper-listbox slot="dropdown-content">
                            <paper-item>Lead Identification</paper-item>
                            <paper-item>Lead Verification</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                </div>
            </div>
            <paper-textarea always-float-label name="description" rows="2" required auto-validate @input="${(event) => this.onChange(event.target.value, event.target.name)}" error-message="Please fill out this field" label="Project Description *" error-message="Please fill out this field"></paper-textarea>

            <paper-dropdown-menu id="priority" required auto-validate @iron-select=${(event) => this.onChange(event.target.selected, 'priority')} label="Priority" error-message="Please fill out this field">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>High</paper-item>
                    <paper-item>Medium</paper-item>
                    <paper-item>Low</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu required auto-validate @iron-select=${(event) => this.onChange(event.target.selected, 'type')} label="Project Type" error-message="Please fill out this field">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>Internal Project</paper-item>
                    <paper-item>External Project</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu required auto-validate @iron-select=${(event) => this.onChange(event.target.selected, 'status')} label="Project Status *" error-message="Please fill out this field">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>In Progress</paper-item>
                    <paper-item>Hold</paper-item>
                    <paper-item>Attrited</paper-item>
                    <paper-item>Completed</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-textarea always-float-label required auto-validate name="statusDescription" rows="2" @input="${(event) => this.onChange(event.target.value, event.target.name)}" label="Status Description" error-message="Please fill out this field"></paper-textarea>
        </form>
         </iron-form>
         </paper-dialog-scrollable>
            <div class="buttons">
                <paper-button class="add-btn" raised @click=${this.onSubmit}>Add</paper-button>
                <paper-button dialog-dismiss @click=${this.onCancel} >Cancel</paper-button>
            </div>
        </paper-dialog>
        `
    }
}

customElements.define('project-form', ProjectForm)