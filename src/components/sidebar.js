function createDiv(divClass, divText){
    const div = document.createElement('div');
    div.classList.add(divClass);
    div.textContent = divText;
    return div;
}

function createProjects(projects){
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    for(let i in projects){
        const item = document.createElement('div');
        item.classList.add('project-item');
        item.dataset.idx = i;
        item.textContent = projects[i].name;
        projectsDiv.appendChild(item);
    }
    return projectsDiv;
}

function createAddBtn(){
    const addBtn = document.createElement('div');
    addBtn.classList.add('add-project');
    const span = document.createElement('span');
    span.textContent = '+Add';
    addBtn.appendChild(span);
    return addBtn;
}

export default function createSidebar(projects){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    sidebar.appendChild(createDiv('default-project', 'Default Tasks'));
    sidebar.appendChild(createDiv('project-header', 'Projects: '));
    sidebar.appendChild(createProjects(projects));
    sidebar.appendChild(createAddBtn());
    
    return sidebar;
}