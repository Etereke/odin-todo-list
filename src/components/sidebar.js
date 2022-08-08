//Sidebar component
export default function createSidebar(projects){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    sidebar.appendChild(createDiv('default-project', 'Default Tasks'));
    sidebar.appendChild(createDiv('project-header', 'Projects: '));
    sidebar.appendChild(createProjects(projects));
    sidebar.appendChild(createAddBtn());
    sidebar.appendChild(createAddInputField());
    return sidebar;
}



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
    span.textContent = '+New Project';
    addBtn.appendChild(span);
    return addBtn;
}

function createAddInputField(){
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('add-project-input');
    inputDiv.hidden = true;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'new-project-name';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-new-project';
    addBtn.textContent = 'Add';
    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancel-new-project';
    cancelBtn.textContent = 'Cancel';

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('add-new-project-btns');
    buttonGroup.appendChild(addBtn);
    buttonGroup.appendChild(cancelBtn);

    inputDiv.appendChild(input);
    inputDiv.appendChild(buttonGroup);
    
    return inputDiv;
}