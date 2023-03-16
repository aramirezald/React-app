import React from "react";
import { TodoContext } from "../TodoContext";
import './LoadingTodo.css'

function LoadingTodo(props) {

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

function ErrorTodo() {
  return (
    <p>...</p>
  )
}

function InicioTodo() {
  return (

    <div className="loader">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
    </div>

      )
}

      export {LoadingTodo, ErrorTodo, InicioTodo}


