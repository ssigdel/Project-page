import { html, LitElement } from 'lit';

class ProjectElement extends LitElement{
    static get properties(){
        return {
            projects : {type: Array},
            onDeleteProject: {type: Function}
        }
    }
    constructor(){
        super();
        this.projects = []
        this.onDeleteProject = () => {}
    }

    render(){
        return html `
        <div>${this.projects.map((project, index) => html `<project-card .project=${project} .onDeleteProject=${this.onDeleteProject} index=${index}></project-card>`)}</div>

        `
    }
}

customElements.define('project-element', ProjectElement)