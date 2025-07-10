import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import "./Todo.css"
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Todo = () => {
    let [todo,setTodo]=useState([])

    const{register,
      handleSubmit,
      reset,
      formState:{errors}}=useForm()

    console.log(todo);
  
    const newTodo=(data)=>{
        data.id=nanoid()
        data.isCompleted=false;
        console.log(data)

        setTodo([...todo,data])
        toast.success("Todo Created !");
      reset()
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
            <span>
            <li onClick={()=>{toggleInput(el.id)}} key={el.id} className={(el.isCompleted)?"true":""}>{el.title}
            </li>
            </span>
            <button onClick={()=>{deleteHandler(el.id)}}>Delete Todo</button>
            </>
        )
    })

  const deleteHandler=(id)=>{
    const filteredTodo=todo.filter((el)=>el.id != id);
    setTodo(filteredTodo);
    toast.error("Todo Deleted !");
  }
  

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit(newTodo)}>
        <input type="text" {...register("title",{required:"Title cannot be empty"})} placeholder='Enter the Task'/>
        <input type="submit" value="Add Task" />
        {errors.title && <p style={{color:"red"}}>{errors.title.message}</p>}
      </form>
      <ul>
        {displayTodo}
      </ul>
    </div>
  )
}

export default Todo

