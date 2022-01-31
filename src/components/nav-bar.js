import { css, html, LitElement } from 'lit';

class NavBar extends LitElement{
    static get properties(){
        return {
            onProjectSearch: {type: Function}
        }
    }
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
        this.onProjectSearch = () => {}
    }

    render(){
        return html `
          <nav>
            <div class="nav-content">
                <h2>Projects</h2>
                <search-bar .onProjectSearch=${this.onProjectSearch}></search-bar>
            </div>
          </nav>
        `
    }
}

customElements.define('nav-bar', NavBar)