import React, { useContext } from "react";
import TodoItem from "./todoItem";
import { TodoCtx } from "../store/todo-context";

const Todo : React.FC = ()=>
     { 
        const useCtx = useContext(TodoCtx)
        return ( <ul>
        {useCtx.items.map((item) => (
            <TodoItem  key={item.id} text={item.text} onRemoveTodo={useCtx.removeTodo.bind(null,item.id)}
             />
        ))}
    </ul>);};


export default Todo;
