import { css, html, LitElement } from 'lit';
import { PROJECTS } from '../constants/projects';

class MainElement extends LitElement{
    static get properties(){
        return{
            projects: {type: Array}
        }
    }
    static get styles(){
        return css `
            .wrapper{
                margin: 5%;
            }
        `
    }
    constructor(){
        super();

        this.handleBtnClick = this.handleBtnClick.bind(this)

        this.searchProject = this.searchProject.bind(this)

        this.deleteProject = this.deleteProject.bind(this)

        this.addProject = this.addProject.bind(this)

        this.projects = [...PROJECTS]
    }

    handleBtnClick(){
        this.shadowRoot.querySelector('.form').shadowRoot.querySelector('.addForm').open();
    }

    searchProject(value){
        value = value.trim()

        if(value.length === 0){
            this.projects = [...PROJECTS]
        }
        else{
            this.projects = this.projects.filter((project) => {
                return project.name.toLowerCase().startsWith(value.toLowerCase())
            })
        }
    }

    deleteProject(index){
        this.projects = this.projects.filter((project, id) => {
            return id != index
        })
    }

    addProject(project){
        project = {...project,  pipelines: ['ASP Pipeline', 'Antibody Pipeline'], stages: ['Lead identification', 'Lead Verification']}
        PROJECTS.push(project)
        this.projects = [...this.projects, project]
    }


    render(){
        return html `
            <nav-bar .onProjectSearch=${this.searchProject}></nav-bar>
            <div class="wrapper">
               ${this.projects.length != 0 ? html `<project-element .projects=${this.projects} .onDeleteProject=${this.deleteProject}></project-element>`: html `<h3>No Project Found!</h3>`}
            </div>
            <floating-button .onButtonClick=${this.handleBtnClick}></floating-button>
            <project-form class="form" .onAddProject=${this.addProject}></project-form>
        `
    }
}

customElements.define('main-element', MainElement)