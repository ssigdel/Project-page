import { html, LitElement } from 'lit';

class ProjectForm extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <h1>Project Form</h1>
        `
    }
}

customElements.define('project-form', ProjectForm)