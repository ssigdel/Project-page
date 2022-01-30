
import { css, html, LitElement } from 'lit';

class ProjectForm extends LitElement{
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
    }

    render(){
        return html `
        <paper-dialog class="addForm">
        <div class="headings">
            <h3>Add Project</h3>
            <paper-icon-button dialog-confirm icon="clear"></paper-icon-button>
        </div>
        <form method="post">
       
            <paper-input always-float-label label="Name"></paper-input>

            <paper-textarea always-float-label label="Project Description" rows="2"></paper-textarea>

            <paper-dropdown-menu label="Priority">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>High</paper-item>
                    <paper-item>Medium</paper-item>
                    <paper-item>Low</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu label="Project Type">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>Internal Project</paper-item>
                    <paper-item>External Project</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu label="Project Status">
                <paper-listbox slot="dropdown-content" selected="1">
                    <paper-item>In Progress</paper-item>
                    <paper-item>Hold</paper-item>
                    <paper-item>Attrited</paper-item>
                    <paper-item>Completed</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>

            <paper-textarea always-float-label label="Status Description" rows="2"></paper-textarea>
            
            <paper-button raised onclick="submitForm()">Add</paper-button>
            <paper-button dialog-confirm >Cancel</paper-button>
        </form>
         
        </paper-dialog>
          
        `
    }
}

customElements.define('project-form', ProjectForm)