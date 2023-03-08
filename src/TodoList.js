import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoSearch } from "./TodoSearch";
import './TodoList.css'


function TodoList(props) {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <section className="container-list">
            <section className="container-search">
                <h1>Your tasks</h1>
                <h4>
                     {completedTodos} of {totalTodos} tasks completed</h4>
            </section>
            {props.children.TodoSearch}
            <ul className="container-tasks">
                {/*Se envía la iteración "TodoItems"*/}
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };