import './App.css'
import NewTodo from './components/NewTodo.tsx'
import Todo from './components/todo.tsx'
import TodoCtxProvider from './store/todo-context.tsx'

function App() {



  return (
    <TodoCtxProvider>
      <NewTodo />
      <Todo  />
    </TodoCtxProvider>
  )
}

export default App
