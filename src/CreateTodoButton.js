import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props){
    const onClickButton = ()=>{
        props.setOpenModal(!props.openModal);
    }

    return (
        <button className="TodoButton"
        onClick={onClickButton}>
            +
        </button>
    );
}

export {CreateTodoButton}