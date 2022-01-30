import '@polymer/paper-card/paper-card';
import { css, html, LitElement } from 'lit';

class ProjectCard extends LitElement{
    static get styles(){
        return css `
            paper-card{
                border-radius: 10px;
                width: 30%;
                margin: 10px;
            }
            .container{
                margin: 5%;
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
                    <h3>Project Card</h3>
                </div>
            </paper-card>
        `
    }
}

customElements.define('project-card', ProjectCard)