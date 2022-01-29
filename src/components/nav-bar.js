import { css, html, LitElement } from 'lit';

class NavBar extends LitElement{
    static get styles(){
        return css `
            nav{
                background-color: white;
            }
            .nav-content{
                padding: 0 10px;
                display: flex;
                justify-content: space-between;
            }
        `
    }
    constructor(){
        super();
    }

    render(){
        return html `
          <nav>
            <div class="nav-content">
                <h3>Projects</h3>
                <search-bar></search-bar>
            </div>
          </nav>
        `
    }
}

customElements.define('nav-bar', NavBar)