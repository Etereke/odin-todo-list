import { Project } from './data-classes/project';
import { Task } from './data-classes/task';
import DOMHandler from './handler-classes/DOM-handler';
import LogicHandler from './handler-classes/logic-handler';
import SiteHandler from './handler-classes/site-handler';
import './style.css';
// const content = document.querySelector('.content');

// localStorage.clear();

// let defaultProjectTest = new Project("Default Project");
// defaultProjectTest.addTask(new Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
// defaultProjectTest.addTask(new Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
// defaultProjectTest.addTask(new Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

// let project = {
//     name: "Project 1",
//     taskList: [
//         {name: "task1", desc: "task1 description", date: "2022-11-22", prio: "high"},
//         {name: "task2", desc: "task2 description", date: "2022-11-23", prio: "medium"},
//         {name: "task3", desc: "task3 description", date: "2022-11-24", prio: "low"}
//     ]
// }
// let project2 = {
//     name: "Project 2",
//     taskList: [
//         {name: "task1", desc: "task1 description"},
//         {name: "task2", desc: "task2 description"}
//     ]
// }
// let projectsTest = [project, project2]
// localStorage.projects = JSON.stringify(projectsTest);
// localStorage.defaultProject = JSON.stringify(defaultProjectTest);


const site = new SiteHandler();
site.Init();