import { html, LitElement } from 'lit';

class ProjectElement extends LitElement{
    static get properties(){
        return {
            projects : {type: Array}
        }
    }
    constructor(){
        super();
        this.projects = []
    }

    render(){
        return html `
        <div>${this.projects.map((project) => html `<project-card .project=${project}></project-card>`)}</div>

        `
    }
}

customElements.define('project-element', ProjectElement)