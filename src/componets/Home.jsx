import React, { useEffect } from 'react'
import './Home.css';
import Task from './Task';
import { useState } from 'react';


const Home = () => {   
    const initialArrya=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks,setTasks]=useState(initialArrya);

    const submitHandler=(e)=>{
        e.preventDefault();

        setTasks([...tasks,{
            title,description
        }])
        setDescription("");
        setTitle("");
    }
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")

    const deleteTask=(index)=>{
        const fliteredArray=tasks.filter((val,i)=>{
            return i!==index;
        })

        setTasks(fliteredArray);

    }
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks])

    // const [inputValue,setInputValue]=useState(0);
    //  const increament=()=>{
    //     setInputValue(inputValue+1);
    //  };
    //  const decreament=()=>{
    //     setInputValue(inputValue-1);

    //  }


    //  const btnStyle={
    //     padding:20,
    //     border:"none",
    //     backgroundColor: "#f1f1f1",
    //     margin:10,
    //  }

  return (
    <div className='container' onSubmit={submitHandler}>
        <h1>DAILY GOALS</h1>
        <form >
            <input type="text" placeholder='Title' value={title}  onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type='submit'>ADD</button>
            {/* <button>Delete</button> */}
        </form>
        {tasks.map((item,index)=>(
            <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
        ))}
    </div>
  )
}

export default Home;