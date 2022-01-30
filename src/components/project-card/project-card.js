
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
            .heading{
                display: flex;
                justify-content: space-between;
            }
            .description{
                border-bottom: 1px solid #999;
            }
            .description-content{
                padding-bottom: 20px;
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
                            <p>TEST002 ASDFA</p>
                        </div>
                        <project-options></project-options>
                    </div>
                    <div class="description">
                        <div class="description-content">
                            This is the description section
                        <div>
                    </div>
                </div>
            </paper-card>
        `
    }
}

customElements.define('project-card', ProjectCard)