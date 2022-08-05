import { Task } from "../data-classes/task";
import DOMHandler from "./DOM-handler";
import LogicHandler from "./logic-handler";

export default class SiteHandler{
    constructor(){
        this.logic = new LogicHandler();
        this.dom = new DOMHandler();
    }
    Init(){
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(-1, this.logic.GetCurrentProject());
        this.AddEventHandlers();
    }
    AddEventHandlers(){
        this.AddChangeProjectEvents();
        this.AddNewProjectEvents();
        this.AddDeleteProjectEvent();
        this.AddToggleDescriptionEvent();
        this.AddNewTaskEvents();
    }



    //Sidebar, change active project
    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.dom.SetActiveProject(-1, this.logic.GetCurrentProject());
            this.AddEventHandlers();
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.dom.SetActiveProject(item.dataset.idx, this.logic.GetCurrentProject());
                this.AddEventHandlers();
            });
        });
    }

    //Sidebar, add new project
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
                this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
                this.AddEventHandlers();
            }
            else{
                input.classList.add('bad-input');
            }
        });
    }

    //Main content, delete project
    AddDeleteProjectEvent(){
        document.querySelector('.content-header>button').addEventListener('click', (e) => {
            console.log('aaa');
            this.logic.DeleteProject(this.logic.GetCurrentIndex());
            this.logic.SetCurrentProject(-1);
            this.logic.WriteToStorage();
            this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
            this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
            this.AddEventHandlers();
        })
    }

    //Main content, toggle task description
    AddToggleDescriptionEvent(){
        [...document.querySelectorAll('.task-row')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                const desc = item.querySelector('.task-desc');
                desc.hidden = !desc.hidden;
            });
        });
    }

    //Main content, add new task to project
    AddNewTaskEvents(){
        document.querySelector('.task-add').addEventListener('click', (e) => {
            this.dom.ToggleNewTaskForm();
        });
        document.querySelector('.cancel-new-task-btn').addEventListener('click', (e) => {
            this.dom.ToggleNewTaskForm();
        });
        document.querySelector('.add-new-task-btn').addEventListener('click', (e) => {
            const taskFields = [];
            [...document.querySelectorAll('.input-field')].forEach((item) => {
                const input = item.querySelector(':last-child');
                input.classList.remove('bad-input');
                if(!input.value){
                    input.classList.add('bad-input');
                }
                else{
                    taskFields.push(input.value);
                }
            });
            if(taskFields.length >= 4){
                const task = new Task(taskFields[0], taskFields[1], taskFields[2], taskFields[3])
                this.logic.GetCurrentProject().addTask(task);
                this.logic.WriteToStorage();
                this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
                this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
                this.AddEventHandlers();
            }
        });
    }
}