import DOMHandler from "./DOM-handler";
import LogicHandler from "./logic-handler";

export default class SiteHandler{
    constructor(){
        this.logic = new LogicHandler();
        this.dom = new DOMHandler();
    }
    Init(){
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(-1);
        this.AddEventHandlers();
    }
    AddEventHandlers(){
        this.AddChangeProjectEvents();
        this.AddNewProjectEvents();
    }

    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.dom.SetActiveProject(-1);
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.dom.SetActiveProject(item.dataset.idx);
            });
        });
    }

    AddNewProjectEvents(){
        document.querySelector('.add-project').addEventListener('click', (e) => {
            this.dom.ToggleNewProjectForm();
        });
        document.querySelector('#cancel-new-project').addEventListener('click', (e) => {
            this.dom.ToggleNewProjectForm();
        });
        document.querySelector('#add-new-project').addEventListener('click', (e) => {
            const input = document.querySelector('#new-project-name');
            if(input.value){
                this.logic.AddProject(input.value);
                this.logic.SetCurrentProject(this.logic.GetProjectList().length - 1);
                this.logic.WriteToStorage();
                this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
                this.dom.SetActiveProject(this.logic.GetCurrentIndex());
                this.AddEventHandlers();
            }
            else{
                input.classList.add('bad-input');
            }
        });
        
    }
}