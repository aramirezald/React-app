import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(props) {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
    } = React.useContext(TodoContext);


    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        props.setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea
            required
            value={newTodoValue}
            onChange={onChange}
            placeholder="Crear sitio web" />
            <div className="buttons">
                <button
                    type="button"
                    onClick={onCancel}
                    className="cancelButton"
                    >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="submitButton"
                    >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };