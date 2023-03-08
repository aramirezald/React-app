import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import './App.css';
import { TodoForm } from "./TodoForm";
import { ErrorTodo, InicioTodo, LoadingTodo } from "./loadingTodo";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);
    return (
        <div className="container">
            {<TodoCounter>
            </TodoCounter>}
            <TodoList>
                {error && <ErrorTodo/>}
                {loading && <LoadingTodo/>}
                {(!loading && !searchedTodos.length) && <InicioTodo/>}

                <TodoSearch />
                {searchedTodos.map(todo => (
                    (<TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onDelete={() => deleteTodo(todo.text)}
                        onComplete={() => completeTodo(todo.text)}
                    />)))}
            </TodoList>
            {/*El signo de interrogacion pregunta si el texto existe antes de ser impreso*/}
            {!!openModal && (
                <Modal>
                    <TodoForm setOpenModal={setOpenModal}/>
                </Modal>
            )}


            {<CreateTodoButton 
            setOpenModal={setOpenModal}
            openModal ={openModal}  />}

        </div>
    )

}

export { AppUI }