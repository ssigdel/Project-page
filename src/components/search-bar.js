
import { html, LitElement } from 'lit';

class SearchBar extends LitElement{
   
    constructor(){
        super();
    }

    render(){
        return html `
           <paper-input type="search" placeholder="Search Projects">
           </paper-input>
        `
    }
}

customElements.define('search-bar', SearchBar)