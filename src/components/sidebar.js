

export default function createSidebar(){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const defaultProject = document.createElement('div');
    defaultProject.classList.add('default-project');
    defaultProject.textContent = 'Default Tasks';

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');
    projectHeader.textContent = 'Projects: ';

    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');

    if(localStorage.projects !== undefined){
        let projectList = JSON.parse(localStorage.projects);
        for(let i in projectList){
            const item = document.createElement('div');
            item.classList.add('project-item');
            item.dataset.idx = i;
            item.textContent = projectList[i].name;
            projectsDiv.appendChild(item);
        }
    }
    
    const addBtn = document.createElement('div');
    addBtn.classList.add('add-project');
    const span = document.createElement('span');
    span.textContent = '+Add';
    addBtn.appendChild(span);
    

    sidebar.appendChild(defaultProject);
    sidebar.appendChild(projectHeader);
    sidebar.appendChild(projectsDiv);
    sidebar.appendChild(addBtn);
    return sidebar;
}