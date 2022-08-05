import { Project } from './data-classes/project';
import { Task } from './data-classes/task';
import DOMHandler from './handler-classes/DOM-handler';
import LogicHandler from './handler-classes/logic-handler';
import SiteHandler from './handler-classes/site-handler';
import './style.css';
// const content = document.querySelector('.content');

localStorage.clear();

let defaultProjectTest = new Project("Default Project");
defaultProjectTest.addTask(new Task('Task 1','2022-11-22', 'Task 1 description', 'high'));
defaultProjectTest.addTask(new Task('Task 2','2022-11-23', 'Task 2 description', 'medium'));
defaultProjectTest.addTask(new Task('Task 3','2022-11-24', 'Task 3 description', 'low'));

let project1 = new Project("Project Nexus");
project1.addTask(new Task('Kill Auditor','2022-11-22', 'He is a wuss so he must die', 'high'));
project1.addTask(new Task('Get the halo','2022-11-23', 'The halo is indispensible for the project', 'high'));
project1.addTask(new Task('Get a hotdog','2022-11-24', 'Yummi!', 'low'));

let project2 = new Project("Project Berseria");
project2.addTask(new Task('Marry Velvet','2022-11-22', 'Velvet is bae', 'high'));
project2.addTask(new Task('Listen to Eizen','2022-11-23', 'He has cool stories', 'medium'));
project2.addTask(new Task('Drink with Rokurou','2022-11-24', 'Wonder if I can beat him', 'low'));

let projectsTest = [project1, project2]
localStorage.projects = JSON.stringify(projectsTest);
localStorage.defaultProject = JSON.stringify(defaultProjectTest);


const site = new SiteHandler();
site.Init();