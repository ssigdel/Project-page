
import { css, html, LitElement } from 'lit';

class ProjectCard extends LitElement{
    static get properties(){
        return {
            project : {type: Object},
            index: {type: Number},
            onDeleteProject: {type: Function},
            editProject : {type: Function}
        }
    }
    static get styles(){
        return css `
            paper-card{
                border-radius: 10px;
                width: 30%;
                margin: 5px;
            }
            .container{
                margin: 5%;
            }
            .test{
                color: #aaa;
                font-size: 12px;
            }
            .heading{
                display: flex;
                justify-content: space-between;
            }
            .item h4{
                color: #aaa;
            }
            .description{
                border-bottom: 1px solid #ccc;
            }
            .description-content{
                overflow-y: scroll;
                height: 50px;
                margin: 5px;
                font-size: 14px;
            }
            .description-content::-webkit-scrollbar{
                display: none;
            }
            .status{
                display: flex;
                justify-content: space-around;
                border-bottom: 1px solid #ccc;
                font-size: 14px;
                color: #999;
            }
            .stage{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size: 14px;
                color: #999;
            }
            .stage-heading{
                display: flex;
                justify-content: space-around;
            }
            .stage-content{
                display: flex;
                justify-content: space-around;
                overflow-y: scroll;
                height: 60px;
                font-size: 14px;
            }
            .stage-content::-webkit-scrollbar{
                display: none;
            }
            .item{
                display: flex;
                flex-direction: column;
            }
        `
    }
    constructor(){
        super();
        this.project = {}
        this.onDeleteProject = () => {}
        this.editProject = () => {}
        this.index = 0
        this.handleEditProject = this.handleEditProject.bind(this)
    }

    handleEditProject(){
        this.shadowRoot.querySelector('.form').shadowRoot.querySelector('.editForm').open()
    }

    render(){
        return html `
            <paper-card>
                <div class="container">
                    <div class="heading">
                        <div>
                            <h4>${this.project.name}</h4>
                            <p class="test">TEST002 ASDFA</p>
                        </div>
                        <project-options index=${this.index} .onEditProject=${this.handleEditProject} .onDeleteProject=${this.onDeleteProject}></project-options>
                    </div>
                    <div class="description">
                        <div class="description-content">
                           ${this.project.description}
                        </div>
                    </div>
                    <div class="status">
                        <div class="item">
                            <h4>PRIORITY</h4>
                            <p>${this.project.priority}</p>
                        </div>
                        <div class="item">
                            <h4>STATUS</h4>
                            <p>${this.project.status}</p>
                        </div>
                    </div>
                    <div class="stage">
                        <div class="stage-heading">
                            <h4>PIPELINE</h4>
                            <h4>STAGE</h4>
                        </div>
                        <div class="stage-content">
                            <div>
                                ${this.project.pipelines.map((pipeline) => html `<p>${pipeline}</p>`)}
                            </div>
                            <div>
                                ${this.project.stages.map((stage) => html `<p>${stage}</p>`)}
                            </div>
                        </div>
                    </div>
                </div>
            </paper-card>
            <edit-form class="form" .editProject=${this.editProject} index=${this.index} .project=${this.project}></edit-form>
        `
    }
}

customElements.define('project-card', ProjectCard)