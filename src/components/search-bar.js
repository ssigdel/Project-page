import { html, LitElement } from 'lit';

class SearchBar extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <h3>Search Element</h3>
        `
    }
}

customElements.define('search-bar', SearchBar)