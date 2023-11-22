// Define TodoItem interface
interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
  }
  
  // Get todo list from localStorage or initialize empty array
  let todoList: TodoItem[] = JSON.parse(localStorage.getItem('todos') || '[]');
  
  // Function to render todos
  function renderTodos() {
    const todoListElement = document.getElementById('todoList')!;
    todoListElement.innerHTML = '';
  
    todoList.forEach(todo => {
      const li = document.createElement('li');
    
      li.innerHTML = `

     
        <span style="line-height: 35px;">${todo.text}</span>
        <button onclick="removeTodo(${todo.id})"   style="background:red">Delete</button>
      `;
//       const lii = document.createElement('input');
//       lii.type = "checkbox";
//       todoListElement.appendChild(lii);
    
// lii.checked = todo.completed;
      li.style.textDecoration = todo.completed ? 'line-through' : 'none';
      li.addEventListener('click', () => toggleTodoCompletion(todo.id));
  
      todoListElement.appendChild(li);
    


      
    });
  }
  
  // Function to add new todo
  function addTodo() {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const newTodoText = todoInput.value.trim();
  
    if (newTodoText !== '') {
      const newTodo: TodoItem = { id: Date.now(), text: newTodoText, completed: false };
      todoList.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(todoList));
      todoInput.value = '';
      renderTodos();
    }
  }
  
  // Function to remove todo
  function removeTodo(todoId: number) {
    todoList = todoList.filter(todo => todo.id !== todoId);
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
  }
  
  // Function to toggle todo completion
  function toggleTodoCompletion(todoId: number) {
    todoList = todoList.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
  }
  
  // Initial render
  renderTodos();
  