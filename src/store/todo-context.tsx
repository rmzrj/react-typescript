import React, { PropsWithChildren, useState } from "react";
import TodoModel from "../models/todo-model.ts";

type TodoCtxAdj = {
    items: TodoModel[];
    addToDo: (txt:string) => void;
    removeTodo: (id:string) => void;
    
}

export const TodoCtx = React.createContext<TodoCtxAdj>({
    items: [],
    addToDo: (txt:string) => {},
    removeTodo : (id:string) => {}
});

const TodoCtxProvider: React.FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<TodoModel[]>([])

    function addTodoHandler(txt: string){
      const newTodo = new TodoModel(txt);
      setTodos((prev) =>  prev.concat(newTodo) );
    }
    function removeHandler(id:string){
       setTodos((prev) => prev.filter(todo => todo.id !== id))
    }
    const ctxValue : TodoCtxAdj = {
        items: todos,
        addToDo: addTodoHandler,
        removeTodo: removeHandler
        
    }

    return <TodoCtx.Provider value={ctxValue} >
        {props.children}
    </TodoCtx.Provider>

};

export default TodoCtxProvider;