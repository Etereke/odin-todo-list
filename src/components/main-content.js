function createHeader(name){
    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = `Project: ${name}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Project';
    contentHeader.appendChild(projectName);
    contentHeader.appendChild(deleteBtn);
    return contentHeader;
}

function createTaskrow(idx, task){
    const taskrow = document.createElement('div');
    taskrow.classList.add('task-row');
    taskrow.classList.add(`prio-${task.prio}`);
    taskrow.dataset.idx = idx;

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = task.date;

    const taskBtns = document.createElement('div');
    taskBtns.classList.add('task-btns');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.dataset.idx = idx;
    taskBtns.appendChild(editBtn);
    const checkBtn = document.createElement('button');
    checkBtn.textContent = 'Check';
    checkBtn.classList.add('check-btn');
    checkBtn.dataset.idx = idx;
    taskBtns.appendChild(checkBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.dataset.idx = idx;
    taskBtns.appendChild(deleteBtn);
    
    const taskDesc = document.createElement('div');
    taskDesc.classList.add('task-desc');
    taskDesc.textContent = task.desc;
    taskDesc.hidden = true;

    taskrow.appendChild(taskName);
    taskrow.appendChild(taskDate);
    taskrow.appendChild(taskBtns);
    taskrow.appendChild(taskDesc);
    return taskrow;
}

function createTasklist(tasks){
    const taskList = document.createElement('div');
    taskList.classList.add('tasks');
    for(let i in tasks){
        taskList.appendChild(createTaskrow(i, tasks[i]));
    }
    return taskList;
}

function createTaskAdd(){
    const taskAdd = document.createElement('div');
    taskAdd.classList.add('task-add');
    taskAdd.innerHTML = '<span>+New Task</span>';
    return taskAdd;
}

function createTaskAddForm(){
    const taskAddForm = document.createElement('div');
    taskAddForm.classList.add('task-add-form');
    taskAddForm.classList.add('hidden');
    taskAddForm.innerHTML = `<div class="task-new-name input-field">
    <label for="task-name">Task</label>
    <input type="text" name="task-name" id="task-name">
</div>
<div class="task-new-date input-field">
    <label for="task-date">Due date</label>
    <input type="date" name="task-date" id="task-date">
</div>
<div class="task-new-desc input-field">
    <label for="task-desc">Description</label>
    <textarea name="task-desc" id="task-desc" cols="30" rows="10"></textarea>
</div>

<div class="task-new-prio input-field">
    <label for="task-prio">Priority</label>
    <select name="task-prio" id="task-prio">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
</div>

<div class="add-btns">
    <button class="add-new-task-btn">Add</button>
    <button class="cancel-new-task-btn">Cancel</button>
</div>`;
    return taskAddForm;
}

export default function createMainContent(project){
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.appendChild(createHeader(project.name));
    mainContent.appendChild(createTasklist(project.tasks));
    mainContent.appendChild(createTaskAdd());
    mainContent.appendChild(createTaskAddForm());
    return mainContent;
}