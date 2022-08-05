import { Project } from "../data-classes/project";

export default class LogicHandler{
    constructor(){
        this.projectList = [];
        this.defaultProject = new Project("Default Tasks");
        const defaultProjectRaw = JSON.parse(localStorage.getItem('defaultProject'));
        for(let task of defaultProjectRaw.tasks){
            this.defaultProject.addTask(task);
        }
        const projectsRaw = JSON.parse(localStorage.getItem('projects'));
        for(let projectRaw of projectsRaw){
            let project = new Project(projectRaw.name);
            for(let task of projectRaw.taskList){
                project.tasks.push(task);
            }
            this.projectList.push(project);
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
        localStorage.setItem(defaultProject, JSON.parse(this.defaultProject));
        localStorage.setItem(projects, JSON.parse(this.projectList));
    }
}