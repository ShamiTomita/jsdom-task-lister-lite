document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //cant do anything without the form, so grab the form id
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');


  // listening for the submit
  form.addEventListener('submit', addTask);

  // delete event
  taskList.addEventListener('click', removeTask);

  // Add task
  function addTask(e){
    //since this is combined with the form listener for submit, it intercepts and prevents pagre refreshing
    e.preventDefault();

    // get input value that is being submitted
    const newTaskDescription = document.getElementById('new-task-description').value;
    //making sure that the new input is being captured
    console.log(newTaskDescription);

    // Create new li element bc you are adding to an exisitng ul
    const li = document.createElement('li');

    // Add text node with input value
    li.appendChild(document.createTextNode(newTaskDescription));

    // create delete button element
    const deleteBtn = document.createElement('button');

    // append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    taskList.appendChild(li);

  }

  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }

  }

});
