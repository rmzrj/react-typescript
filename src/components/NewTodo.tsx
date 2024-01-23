import React, { useContext, useRef } from "react";
import { TodoCtx } from "../store/todo-context";

const NewTodo : React.FC = ()=> {
    const useCtx = useContext(TodoCtx);

    const todoInputRefs = useRef<HTMLInputElement>(null)
    function submitHandler (event : React.FormEvent){
        event.preventDefault();
        const enteredTxt = todoInputRefs.current?.value ?? '';
        if( enteredTxt.trim().length == 0){
            return;
        }

        useCtx.addToDo(enteredTxt);

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoInputRefs}/>
            <button>Add Todo</button>
        </form>
    );
};
export default NewTodo;