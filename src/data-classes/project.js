export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    getTask(index){
        return tasks[index];
    }
    deleteTask(idx){
        this.tasks.splice(idx, 1);
    }
}