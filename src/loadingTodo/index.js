import React from "react";
import { TodoContext } from "../TodoContext";
import './LoadingTodo.css'

function LoadingTodo(props){
    
      return (
        <div id="loader">
        <div class="loader-inner">
          <div class="loader-rectangles"></div>
          <div class="loader-rectangles"></div>
          <div class="loader-rectangles"></div>
        </div>
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


