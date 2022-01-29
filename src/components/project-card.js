import { html, LitElement } from 'lit';

class ProjectCard extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <h1>Project Card</h1>
        `
    }
}

customElements.define('project-card', ProjectCard)