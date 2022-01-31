
import { html, LitElement } from 'lit';

class SearchBar extends LitElement{
    static get properties(){
        return{
            onProjectSearch: {type: Function}
        }
    }
    constructor(){
        super();
        this.onProjectSearch = () => {}
    }

    render(){
        return html `
           <paper-input type="search" @input=${this.onInput} placeholder="Search Projects">
                <div slot="prefix"><iron-icon icon="search"></iron-icon></div>
           </paper-input>
        `
    }

    onInput(event){
        this.onProjectSearch(event.target.value)
    }
}

customElements.define('search-bar', SearchBar)