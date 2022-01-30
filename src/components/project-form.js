import '@polymer/paper-button/paper-button';
import '@polymer/paper-dialog/paper-dialog';
import '@polymer/paper-input/paper-input';
import { css, html, LitElement } from 'lit';

class ProjectForm extends LitElement{
    static get styles(){
        return css `
            paper-dialog{
                width: 30%;
                height: 50%;
                border-radius: 10px;
            }
        `
    }
    constructor(){
        super();
    }

    render(){
        return html `
        <paper-dialog class="addForm">
            <h3>Add Project</h3>
        <div>
            <paper-input always-float-label label="Name"></paper-input>
            <paper-button raised>Add</paper-button>
            <paper-button>Cancel</paper-button>
        </div>
         
        </paper-dialog>
          
        `
    }
}

customElements.define('project-form', ProjectForm)