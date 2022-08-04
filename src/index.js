import createSidebar from './components/sidebar';
import { Project } from './data-classes/project';
import { Task } from './data-classes/task';
import './style.css';
const content = document.querySelector('.content');

localStorage.clear();

let defaultProjectTest = new Project("Default Project");
defaultProjectTest.addTask(new Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
defaultProjectTest.addTask(new Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
defaultProjectTest.addTask(new Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

let project = {
    name: "Project 1",
    taskList: [
        {name: "task1", desc: "task1 description", date: "2022-11-22", prio: "high"},
        {name: "task2", desc: "task2 description", date: "2022-11-23", prio: "medium"},
        {name: "task3", desc: "task3 description", date: "2022-11-24", prio: "low"}
    ]
}
let project2 = {
    name: "Project 2",
    taskList: [
        {name: "task1", desc: "task1 description"},
        {name: "task2", desc: "task2 description"}
    ]
}
let projectsTest = [project, project2]
localStorage.projects = JSON.stringify(projectsTest);
localStorage.defaultProject = JSON.stringify(defaultProjectTest);

// let stProject = JSON.parse(localStorage.projects);
// console.log(stProject);
// localStorage.clear();
const projectsRaw = JSON.parse(localStorage.projects);
const defaultProjectRaw = JSON.parse(localStorage.defaultProject);
const defaultProject = new Project(defaultProjectRaw.name);
for(let task of defaultProjectRaw.tasks){
    defaultProject.addTask(task);
}
console.log(defaultProject);
const projectlistTester = [];

// content.innerHTML = '';
// content.appendChild(createSidebar());

function addProject(projectlist, name){
    projectlist.push(new Project(name));
    console.log(projectlistTester);
}

document.querySelector('.add-project').addEventListener('click', addProject.bind(null, projectlistTester, 'New Project'));