"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
// add a new todo to todos
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});
// overwrite a specific todo
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIindex = todos.findIndex(todoTtem => todoTtem.id === tid);
    if (todoIindex >= 0) {
        todos[todoIindex] = { id: todos[todoIindex].id, text: req.body.text };
        res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    else {
        res.status(404).json({ message: 'Could not find todo for this id.' });
    }
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
