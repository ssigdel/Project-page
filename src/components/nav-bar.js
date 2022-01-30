import { css, html, LitElement } from 'lit';

class NavBar extends LitElement{
    static get styles(){
        return css `
            nav{
                background-color: white;
            }
            .nav-content{
                padding: 0 30px;
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
                <h2>Projects</h2>
                <search-bar></search-bar>
            </div>
          </nav>
        `
    }
}

customElements.define('nav-bar', NavBar)