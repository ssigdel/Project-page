
import { css, html, LitElement } from 'lit';

class ProjectCard extends LitElement{
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
                padding-bottom: 20px;
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
    }

    render(){
        return html `
            <paper-card>
                <div class="container">
                    <div class="heading">
                        <div>
                            <h4>ASP Latest Test</h4>
                            <p class="test">TEST002 ASDFA</p>
                        </div>
                        <project-options></project-options>
                    </div>
                    <div class="description">
                        <div class="description-content">
                            This is the description section. This is the description section. This is the description section. This is the description section. This is description section. This is description section. This is description section.
                        </div>
                    </div>
                    <div class="status">
                        <div class="item">
                            <h4>PRIORITY</h4>
                            <p>High</p>
                        </div>
                        <div class="item">
                            <h4>STATUS</h4>
                            <p>Attrited</p>
                        </div>
                    </div>
                    <div class="stage">
                        <div class="stage-heading">
                            <h4>PIPELINE</h4>
                            <h4>STAGE</h4>
                        </div>
                        <div class="stage-content">
                            <div>
                                <p>ASP Pipeline</p>
                                <p>Antibody pipeline</p>
                            </div>
                            <div>
                                <p>Lead Identification</p>
                                <p>Lead Validation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </paper-card>
        `
    }
}

customElements.define('project-card', ProjectCard)