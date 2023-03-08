import React from "react";
import './TodoItem.css';
import check from './icons/check.png';

function TodoItem(props) {
    const todoDelete = () => {
        alert("Se eliminó: " + props.text)
    }

    return (
        <li >
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}>
                ᄼ
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
                onClick={props.onDelete}
                onClickCapture={todoDelete}>
                X
            </span>
        </li>
    );
}

export { TodoItem };