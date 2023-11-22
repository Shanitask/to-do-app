"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Get todo list from localStorage or initialize empty array
var todoList = JSON.parse(localStorage.getItem('todos') || '[]');
// Function to render todos
function renderTodos() {
    var todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = '';
    todoList.forEach(function (todo) {
        var li = document.createElement('li');
        li.innerHTML = "\n\n     \n        <span style=\"line-height: 35px;\">".concat(todo.text, "</span>\n        <button onclick=\"removeTodo(").concat(todo.id, ")\"   style=\"background:red\">Delete</button>\n      ");
        //       const lii = document.createElement('input');
        //       lii.type = "checkbox";
        //       todoListElement.appendChild(lii);
        // lii.checked = todo.completed;
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';
        li.addEventListener('click', function () { return toggleTodoCompletion(todo.id); });
        todoListElement.appendChild(li);
    });
}
// Function to add new todo
function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var newTodoText = todoInput.value.trim();
    if (newTodoText !== '') {
        var newTodo = { id: Date.now(), text: newTodoText, completed: false };
        todoList.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todoList));
        todoInput.value = '';
        renderTodos();
    }
}
// Function to remove todo
function removeTodo(todoId) {
    todoList = todoList.filter(function (todo) { return todo.id !== todoId; });
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
}
// Function to toggle todo completion
function toggleTodoCompletion(todoId) {
    todoList = todoList.map(function (todo) {
        return todo.id === todoId ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
    });
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodos();
}
// Initial render
renderTodos();
