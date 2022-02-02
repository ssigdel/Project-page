import { css, html, LitElement } from 'lit';

const priority = ['High', 'Medium', 'Low']
const type = ['Internal Project', 'External Project']
const status = ['In Progress', 'Hold', 'Attrited', 'Completed']
const pipelines = ['ASP Pipeline', 'Antibody Pipeline']
const stages = ['Lead Identification', 'Lead Verification']

class EditForm extends LitElement{
    /**
     * return properties
     */
    static get properties(){
        return{
            index: {type: Number},
            project : {type: Object},
            onEditProject: {type: Function},
            editProject: {type: Function}
        }
    }
    /** 
     * return css
     */
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
        this.index = 0
        this.onEditProject = () => {}
        this.editProject = () => {}
        this.project = {}
    }

    /**
     * handle input change
     * @param {input value} value 
     * @param {property} name 
     */
    onChange(value, name){
        this.project = {...this.project, [name]: value}

        this.project.priority = priority[this.project.priority] || this.project.priority
        this.project.type = type[this.project.type] || this.project.type
        this.project.status = status[this.project.status] || this.project.status
        this.project.pipelines = [pipelines[this.project.pipelines] || this.project.pipelines[0]]
        this.project.stages = [stages[this.project.stages] || this.project.stages[0]]

    }

    /**
     * handle submit
     */
    onSubmit(){
       
        this.editProject(this.index, this.project)

        this.shadowRoot.querySelector('.editForm').close()
    }

    /**
     * handle cancel 
     */
    onCancel(){
        this.shadowRoot.querySelector('iron-form').reset()
    }

    /**
     * 
     * @returns html
     */

    render(){
        return html `
        <paper-dialog class="editForm">
        <div class="headings">
            <h2>Edit Project</h2>
            <paper-icon-button dialog-dismiss @click=${this.onCancel} icon="clear"></paper-icon-button>
        </div>
        <paper-dialog-scrollable>
        <iron-form>
        <form action="/" method="post">
       
            <paper-input always-float-label name="name" value=${this.project.name}   @input="${(event) => this.onChange(event.target.value, event.target.name)}"   label="Name"></paper-input>
            <div>
                <h4>Pipeline(s)</h4>
                <div class="pipeline-content">
                    <paper-dropdown-menu value=${this.project.pipelines[0]}  @iron-select=${(event) => this.onChange(event.target.selected, 'pipelines')} label="Pipeline">
                        <paper-listbox slot="dropdown-content">
                            <paper-item>ASP Pipeline</paper-item>
                            <paper-item>Antibody Pipeline</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-dropdown-menu value=${this.project.stages[0]} @iron-select=${(event) => this.onChange(event.target.selected, 'stages')} label="Stages">
                        <paper-listbox slot="dropdown-content">
                            <paper-item>Lead Identification</paper-item>
                            <paper-item>Lead Verification</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                </div>
            </div>
            <paper-textarea always-float-label value=${this.project.description} name="description" rows="2"  @input="${(event) => this.onChange(event.target.value, event.target.name)}"  label="Project Description" ></paper-textarea>

            <paper-dropdown-menu id="priority" value=${this.project.priority}  @iron-select=${(event) => this.onChange(event.target.selected, 'priority')} label="Priority" >
                <paper-listbox slot="dropdown-content" selected=${this.project.priority}>
                    <paper-item>High</paper-item>
                    <paper-item>Medium</paper-item>
                    <paper-item>Low</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu  value=${this.project.type} @iron-select=${(event) => this.onChange(event.target.selected, 'type')} label="Project Type" >
                <paper-listbox slot="dropdown-content">
                    <paper-item>Internal Project</paper-item>
                    <paper-item>External Project</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu value=${this.project.status}  @iron-select=${(event) => this.onChange(event.target.selected, 'status')} label="Project Status" >
                <paper-listbox slot="dropdown-content" >
                    <paper-item>In Progress</paper-item>
                    <paper-item>Hold</paper-item>
                    <paper-item>Attrited</paper-item>
                    <paper-item>Completed</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-textarea always-float-label value=${this.project.statusDescription || ''} name="statusDescription" rows="2" @input="${(event) => this.onChange(event.target.value, event.target.name)}" label="Status Description"></paper-textarea>
        </form>
         </iron-form>
         </paper-dialog-scrollable>
            <div class="buttons">
                <paper-button class="add-btn" raised @click=${this.onSubmit}>Update</paper-button>
                <paper-button dialog-dismiss @click=${this.onCancel} >Cancel</paper-button>
            </div>
        </paper-dialog>
        `
    }
}

customElements.define('edit-form', EditForm)