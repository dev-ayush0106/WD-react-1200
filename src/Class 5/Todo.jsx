import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import "./Todo.css"

const Todo = () => {
    let [todo,setTodo]=useState([])
    let [title,setTitle]=useState("");


    console.log(todo);
  
    const newTodo=(e)=>{
        e.preventDefault();
        let list={
            id:nanoid(),
            title,
            isCompleted:false
        }
        console.log(list)

        setTodo([...todo,list])
        setTitle("")
    }

    let toggleInput=(id)=>{
        let update=todo.map((el)=> el.id=== id ? {...el,isCompleted:!el.isCompleted}:el)
        setTodo(update)
        console.log("Clicked")
        // console.log(el);
    }


    
    let displayTodo=todo.map((el)=>{
        return(
            <>
            <li onClick={()=>{toggleInput(el.id)}} key={el.id} className={(el.isCompleted)?"true":""}>{el.title}
            <button>Delete Todo</button>
            </li>
            </>
        )
    })

  
    

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={newTodo}>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter the Task'/>
        <input type="submit" value="Add Task" />
      </form>
      <ul>
        {displayTodo}
      </ul>
    </div>
  )
}

export default Todo
