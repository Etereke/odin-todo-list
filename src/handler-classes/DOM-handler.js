import createMainContent from "../components/main-content";
import createSidebar from "../components/sidebar";

export default class DOMHandler{
    constructor(){
        this.content = document.querySelector('.content');
    }

    BuildSite(projects, currentProject){
        this.content.innerHTML = '';
        this.content.appendChild(createSidebar(projects));
        this.BuildProject(currentProject);
    }

    SetActiveProject(idx){
        const active = document.querySelector('.active-project');
        console.log(active);
        if(active){
            active.classList.remove('active-project');
        }
        if(+idx === -1){
            document.querySelector('.default-project').classList.add('active-project');
        }
        else{
            document.querySelector(`[data-idx='${idx}']`).classList.add('active-project');
        }
    }

    ToggleNewProjectForm(){
        const addProject = document.querySelector('.add-project');
        const addProjectForm = document.querySelector('.add-project-input');
        const projectNameInput = document.querySelector('#new-project-name');
        projectNameInput.value = '';
        projectNameInput.classList.remove('bad-input');
        addProject.hidden = !addProject.hidden;
        addProjectForm.hidden = !addProjectForm.hidden;
    }

    BuildProject(currentProject){
        //this.content.appendChild(createMainContent(currentProject));
    }
}