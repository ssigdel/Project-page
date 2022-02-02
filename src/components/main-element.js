import { css, html, LitElement } from 'lit';
import { PROJECTS } from '../constants/projects';

const projects = [...PROJECTS]

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

        this.editProject = this.editProject.bind(this)

        this.projects = [...projects]
    }

    /**
     * handle button click
     */
    handleBtnClick(){
        this.shadowRoot.querySelector('.form').shadowRoot.querySelector('.addForm').open();
    }

    /**
     * search project
     * @param {string} value 
     */
    searchProject(value){
        value = value.trim()

        if(value.length === 0){
            this.projects = [...projects]
        }
        else{
            this.projects = this.projects.filter((project) => {
                return project.name.toLowerCase().startsWith(value.toLowerCase())
            })
        }
    }

    /**
     * delete project
     * @param {number} index 
     */
    deleteProject(index){
        this.projects = this.projects.filter((project, id) => {
            return id != index
        })
        projects.splice(index, 1)
    }

    /**
     * add new project
     * @param {object} project 
     */
    addProject(project){
        projects.push(project)
        this.projects = [...this.projects, project]
    }

    /**
     * edit the given project
     * @param {number} index 
     * @param {object} project 
     */
    editProject(index, project){
        projects.splice(index, 1, project)
        this.projects = [...projects]
    }

    /**
     * render html template
     * @returns html
     */
    render(){
        return html `
            <nav-bar .onProjectSearch=${this.searchProject}></nav-bar>
            <div class="wrapper">
               ${this.projects.length != 0 ? html `<project-element .projects=${this.projects} .editProject=${this.editProject} .onDeleteProject=${this.deleteProject}></project-element>`: html `<h3>No Project Found!</h3>`}
            </div>
            <floating-button .onButtonClick=${this.handleBtnClick}></floating-button>
            <project-form class="form" .onAddProject=${this.addProject}></project-form>
        `
    }
}

customElements.define('main-element', MainElement)