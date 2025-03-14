import { Router } from "express";
import { Todo } from "../models/todos";
import { todo } from "node:test";
const router = Router();


type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = []


router.get('/', (req,res,next)=>{
    res.status(200).json({ todos: todos })
})


// add a new todo to todos
router.post('/todo', (req,res,next)=>{
    const body = req.body as RequestBody;

    const newTodo: Todo = {
        id : new Date().toISOString(),
        text : body.text
    }

    todos.push(newTodo);
    
    res.status(201).json({ message:'Added todo', todo:newTodo, todos:todos });

})

// overwrite a specific todo
router.put('/todo/:todoId', (req,res,next)=>{
    const params = req.params as RequestParams;
    const tid = params.todoId;

    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex(todoTtem => todoTtem.id === tid);
    
    if(todoIndex >=0){
        todos[todoIndex] = {id: todos[todoIndex].id, text: body.text };
        res.status(200).json({ message:'Updated todo', todos:todos})
    }else{
        res.status(404).json({ message:'Could not find todo for this id.' })
    }
})

router.delete('/todo/:todoId', (req,res,next)=>{
    const params =  req.params as RequestParams;


    todos = todos.filter( todoItem => todoItem.id !== params.todoId );
    
    res.status(200).json({ message:'Deleted todo', todos:todos })
})

export default router;
