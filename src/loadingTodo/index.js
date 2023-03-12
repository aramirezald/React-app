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

          <div className="rect-one">
            <p className="circle"></p>
            <input className="input-1" readOnly></input>
            <input className="input-2" readOnly></input>
            <input className="input-3" readOnly></input>
            <input className="input-4" readOnly></input>
          </div>

  
    )
}

export {LoadingTodo, ErrorTodo, InicioTodo}


