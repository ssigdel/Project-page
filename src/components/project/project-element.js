import { html, LitElement } from 'lit';

class ProjectElement extends LitElement{
    static get properties(){
        return {
            projects : {type: Array},
            onDeleteProject: {type: Function},
            editProject: {type: Function}
        }
    }
    constructor(){
        super();
        this.projects = []
        this.onDeleteProject = () => {}
        this.editProject = () => {}
    }

    render(){
        return html `
        <div>${this.projects.map((project, index) => html `<project-card .project=${project} .editProject=${this.editProject} .onDeleteProject=${this.onDeleteProject} index=${index}></project-card>`)}</div>

        `
    }
}

customElements.define('project-element', ProjectElement)