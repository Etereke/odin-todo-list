import createMainContent from "../components/main-content";
import createSidebar from "../components/sidebar";

export default class DOMHandler{
    constructor(){
        this.content = document.querySelector('.content');
    }

    BuildSite(projects, currentProject){
        this.content.innerHTML = '';
        this.content.appendChild(createSidebar(projects));
        this.CreateMainContent(currentProject);
    }

    SetActiveProject(idx, project){
        const active = document.querySelector('.active-project');
        if(active){
            active.classList.remove('active-project');
        }
        if(+idx === -1){
            document.querySelector('.default-project').classList.add('active-project');
        }
        else{
            document.querySelector(`[data-idx='${idx}']`).classList.add('active-project');
        }
        this.CreateMainContent(project);
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

    ToggleNewTaskForm(){
        const addTask = document.querySelector('.task-add');
        addTask.hidden = !addTask.hidden;
        const addTaskForm = document.querySelector('.task-add-form');
        addTaskForm.classList.toggle('hidden');
        [...document.querySelectorAll('.input-field')].forEach((item) => {
            const input = item.querySelector(':last-child');
            input.value = '';
            input.classList.remove('bad-input');
        });
        // projectNameInput.value = '';
        // projectNameInput.classList.remove('bad-input');
        
    }

    CreateMainContent(currentProject){
        const mainContent = document.querySelector('.main-content');
        if(mainContent){
            mainContent.remove();
        }
        this.content.appendChild(createMainContent(currentProject));
    }
}