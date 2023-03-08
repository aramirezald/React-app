import React from "react";
import { TodoContext } from "../TodoContext";
import './LoadingTodo.css'

function LoadingTodo(props){
    
      return (
        <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      );
    }

function ErrorTodo(){
    return(
        <p>...</p>
    )
}

function InicioTodo(){
    return(
        <div class="loader">
        <p>Crea el primer TODOO :D</p>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    )
}

export {LoadingTodo, ErrorTodo, InicioTodo}


