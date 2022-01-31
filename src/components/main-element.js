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


    render(){
        return html `
            <nav-bar .onProjectSearch=${this.searchProject}></nav-bar>
            <div class="wrapper">
               <project-element .projects=${this.projects}></project-element>
            </div>
            <floating-button .onButtonClick=${this.handleBtnClick}></floating-button>
            <project-form class="form"></project-form>
        `
    }
}

customElements.define('main-element', MainElement)