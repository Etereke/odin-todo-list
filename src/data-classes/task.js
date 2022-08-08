export class Task{
    constructor(name, date, desc, prio, finished = false){
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.prio = prio;
        this.finished = finished;
    }
    ToggleFinished(){
        this.finished = !this.finished;
    }

    Edit(name, date, desc, prio){
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.prio = prio;
    }
}