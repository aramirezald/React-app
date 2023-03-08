import React from "react";
import './TodoCounter.css';
import { TodoContext } from "./TodoContext";
import list from './icons/list.png';

function TodoCounter(props) {
    const [TodoValue, setNewTodoValue] = React.useState('')

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    const {
        addTodo,
    } = React.useContext(TodoContext);
    const addSubmit = (event)=>{
        event.preventDefault();
        addTodo(TodoValue);
        setNewTodoValue('')
    }

    return (
        <div className="container-todo">
            <h2 className="title">ADD A NEW TASK</h2>
            
            <form onSubmit={addSubmit} className="newTodoForm">
            <h4 className="subtitle">Add a new task</h4>
            
            <input type="search" placeholder="Make the homework of spanish" 
            className="search-task" 
            value={TodoValue}
            onChange={onChange}
            required/>

            <button className="add"
                type="submit"
                id="refresh">
                Create task
            </button>
            </form>

            <figure className="list-img">
                <img src={list} />
            </figure>
        </div>
    );
}


export { TodoCounter };

