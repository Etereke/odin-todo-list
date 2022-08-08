import { Project } from "../data-classes/project";
import { Task } from "../data-classes/task";


//Handles the logic of the site - loads the content from local storage, applies changes in the memory, and writes everything back to local storage when a change happens
export default class LogicHandler{
    //Initializes the default project and the projectlist from local storage
    constructor(){
        this.projectList = [];
        this.defaultProject = new Project("Default Tasks");
        const defaultProjectRaw = JSON.parse(localStorage.getItem('defaultProject'));
        if(defaultProjectRaw){
            for(let task of defaultProjectRaw.tasks){
                this.defaultProject.addTask(new Task(task.name, task.date, task.desc, task.prio, task.finished));
            }
        }
        const projectsRaw = JSON.parse(localStorage.getItem('projects'));
        if(projectsRaw){
            for(let projectRaw of projectsRaw){
                let project = new Project(projectRaw.name);
                if(projectRaw.tasks){
                    for(let task of projectRaw.tasks){
                        project.addTask(new Task(task.name, task.date, task.desc, task.prio, task.finished));
                    }
                }
                this.projectList.push(project);
            }
        }
        this.currentProjectIndex = -1;
    }
    
    GetProjectList(){
        return this.projectList;
    }
    GetCurrentProject(){
        if(this.currentProjectIndex === -1){
            return this.defaultProject;
        }
        else{
            return this.projectList[this.currentProjectIndex];
        }
    }
    GetCurrentIndex(){
        return this.currentProjectIndex;
    }
    SetCurrentProject(idx){
        this.currentProjectIndex = idx;
    }
    AddProject(name){
        this.projectList.push(new Project(name));
    }
    DeleteProject(idx){
        if(idx !== -1){
            this.projectList.splice(idx, 1);
        }
    }
    WriteToStorage(){
        localStorage.setItem('defaultProject', JSON.stringify(this.defaultProject));
        localStorage.setItem('projects', JSON.stringify(this.projectList));
    }
}