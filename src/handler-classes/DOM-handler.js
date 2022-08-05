import createMainContent from "../components/main-content";
import createSidebar from "../components/sidebar";

export default class DOMHandler{
    constructor(){
        this.content = document.querySelector('.content');
    }

    BuildSite(projects, currentProject){
        this.content.innerHTML = '';
        this.content.appendChild(createSidebar(projects));
        this.content.appendChild(createMainContent(currentProject));
        this.AddEventHandlers();
    }
}