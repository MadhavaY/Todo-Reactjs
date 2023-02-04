// import bootstrap from 
import './App.css';
import Todocount from './Components/Todocount';
import Todolist from './Components/Todolist';
import Addtodo from './Components/Addtodo';
import Darkmode from './Components/Darkmode';
import {useState,useEffect} from "react";

function App() {
  let[todolist, setTodolist] = useState([]);
  const [theme,setTheme] = useState('light');

//   const handleChange = (e)=>{
//     let value = e.target.value;
//     let name = e.target.name;

//     setTodolist((prev)=>({...prev,[name]:value}));
//   }
  
// useEffect(()=>{
//   const formS = JSON.parse(localStorage.getItem("user"))
  
//   setTodolist((prev)=>({...prev,...formS}));
// },[])

//   useEffect(()=>{
//     localStorage.setItem("user",JSON.stringify(setTodolist))
// },[todolist]);

  return (

    <div className={`container ${theme}`}>
    <div className="row">

    {/* <div>
        <Darkmode></Darkmode>
      </div> */}

      <div >
      <Addtodo setTodolist={setTodolist} todolist={todolist}/>
      </div>
      
      <div >

      <Todolist todolist={todolist} setTodolist={setTodolist}></Todolist>
      </div>

      <div >
      {/* <Todocount todolist={todolist}></Todocount> */}
      </div>

      
         
      
    </div>
   
    </div>
  );
}

export default App;
