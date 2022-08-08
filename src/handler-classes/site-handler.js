import { Task } from "../data-classes/task";
import DOMHandler from "./DOM-handler";
import LogicHandler from "./logic-handler";

//Handles the site through the DOM-handler and logic-handler classes, responsible for setting up event handlers
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
        this.AddTaskButtonEvents();
    }

    //Sidebar, change active project
    AddChangeProjectEvents(){
        document.querySelector('.default-project').addEventListener('click', (e) => {
            this.logic.SetCurrentProject(-1);
            this.ExecuteModification();
        });
        [...document.querySelectorAll('.project-item')].forEach((item)=>{
            item.addEventListener('click', (e)=> {
                this.logic.SetCurrentProject(item.dataset.idx);
                this.ExecuteModification();
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
                this.ExecuteModification();
            }
            else{
                input.classList.add('bad-input');
            }
        });
    }

    //Main content, delete project
    AddDeleteProjectEvent(){
        document.querySelector('.content-header>button').addEventListener('click', (e) => {
            this.logic.DeleteProject(this.logic.GetCurrentIndex());
            this.logic.SetCurrentProject(-1);
            this.ExecuteModification();
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
                this.ExecuteModification();
            }
        });
    }

    //Main content, events related to the buttons in the task rows (edit, check, delete buttons)
    AddTaskButtonEvents(){
        [...document.querySelectorAll('.delete-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.logic.GetCurrentProject().deleteTask(item.dataset.idx);
                this.ExecuteModification();
            });
        });
        [...document.querySelectorAll('.check-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.logic.GetCurrentProject().getTask(item.dataset.idx).ToggleFinished();
                this.ExecuteModification();
            });
        });
        [...document.querySelectorAll('.edit-btn')].forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.dom.ToggleEditTaskForm(this.logic.GetCurrentProject().getTask(item.dataset.idx));
                let editBtn = document.querySelector('.edit-task-btn');
                editBtn.replaceWith(editBtn.cloneNode(true));
                editBtn = document.querySelector('.edit-task-btn');
                editBtn.addEventListener('click', (e) => {
                    const name = document.querySelector('.task-edit-name>:last-child');
                    const date = document.querySelector('.task-edit-date>:last-child');
                    const desc = document.querySelector('.task-edit-desc>:last-child');
                    const prio = document.querySelector('.task-edit-prio>:last-child');
                    let hasEmpty = false;
                    if(!name.value){
                        name.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        name.classList.remove('bad-input');
                    }
                    if(!date.value){
                        date.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        date.classList.remove('bad-input');
                    }
                    if(!desc.value){
                        desc.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        desc.classList.remove('bad-input');
                    }
                    if(!prio.value){
                        prio.classList.add('bad-input');
                        hasEmpty = true;
                    }
                    else{
                        prio.classList.remove('bad-input');
                    }
                    if(!hasEmpty){
                        this.logic.GetCurrentProject().getTask(item.dataset.idx).Edit(name.value, date.value, desc.value, prio.value);
                        this.ExecuteModification();
                    }
                });
                
            })
        })
    }

    //This function is called every time a change is made to a task or a project
    ExecuteModification(){
        this.logic.WriteToStorage();
        this.dom.BuildSite(this.logic.GetProjectList(), this.logic.GetCurrentProject());
        this.dom.SetActiveProject(this.logic.GetCurrentIndex(), this.logic.GetCurrentProject());
        this.AddEventHandlers();
    }
}