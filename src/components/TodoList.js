import React, {useState} from 'react'
import TodoForm from './TodoForm'
import ToDo from './ToDo.js';

const TodoList = () => {
    const [todos,setTodos] = useState([]);
    const addToDo = todo =>{
        if(!todo || /^\s*$/.test(todo)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }   
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    const removeTodo = id =>{
        const searchRemoveIndex = [...todos].filter(todo=>todo.id !==id);
        setTodos(searchRemoveIndex);
    }
    const updateTodo = (todoId, newValue) => {
        if(!newValue || /^\s*$/.test(newValue)){
            console.log('returned')
            return;
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue :item)));
    }
    return (
        <div>
            <h1>What' the Plan for Today?</h1>
            <TodoForm onSubmit={addToDo}/>
            <ToDo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList