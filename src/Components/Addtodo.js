import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import './Addtodo.css'
import exclamation from './Images/exclamation-mark.png'

function Addtodo(props) {

    let { register, handleSubmit, formState: { errors } } = useForm();


    const onFormSubmit = (todoObj) => {
        props.setTodolist([...props.todolist, todoObj.newtodo])
    }

   


    return (

        
        <div className="addtodo">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="addtodoelements">
                    {/* <label htmlFor="todo">New Todo</label> */}
                    <input type="text" placeholder="  What is your main focus for today?" id="todo" className="input" {...register("newtodo",{required:true,minLength:1})} />
                    {errors.newtodo?.type==="required" && <p className="text-danger"><img class="rounded" src={exclamation}/> Can't add empty todo  </p>}
                    <button type="submit" className="button">
                        {/* <img src={addimage} alt='add'/> */}
                        Add Todo
                    </button>
                </div>
                {/* <button type="submit" id="deletebtn" className="button">
                    DELETE ALL
                </button> */}
            </form>

        </div>
    )
}


export default Addtodo;


// className="w-75 mx-auto"
// className="display-5 text-info"