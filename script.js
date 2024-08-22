document.addEventListener('DOMContentLoaded', function() {
    // Function to set the current date
    function setCurrentDate() {
        const currentDateElement = document.getElementById('current-date');
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        currentDateElement.textContent = formattedDate;
    }

    // Function to set the current time
    function setCurrentTime() {
        const currentTimeElement = document.getElementById('current-time');
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString();
        currentTimeElement.textContent = formattedTime;
    }

    setCurrentDate(); // Set the current date
    setCurrentTime(); // Set the current time
    setInterval(setCurrentTime, 1000); // Update time every second

    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const positionSelect = document.getElementById('position-select');
    const todoList = document.getElementById('todo-list');
    const completedList = document.getElementById('completed-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodoItem(input.value, positionSelect.value);
        input.value = '';
        positionSelect.value = '';
    });

    function addTodoItem(todoText, positionText) {
        const li = document.createElement('li');

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                completedList.appendChild(li);
            } else {
                todoList.appendChild(li);
            }
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = todoText;

        const positionSpan = document.createElement('div');
        positionSpan.textContent = positionText;
        positionSpan.classList.add('position');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            if (checkbox.checked) {
                completedList.removeChild(li);
            } else {
                todoList.removeChild(li);
            }
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(span);

        li.appendChild(taskDiv);
        li.appendChild(positionSpan);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
