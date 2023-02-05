// import bootstrap from 
import './App.css';
import Todocount from './Components/Todocount';
import Todolist from './Components/Todolist';
import Addtodo from './Components/Addtodo';
import Darkmode from './Components/Darkmode';
import { useState, useEffect } from "react";

const getLocalItems=()=>{
  let list = localStorage.getItem('list');
  console.log(list);

  if(list){
    return JSON.parse( localStorage.getItem('list'));
  }else{
    return [];
  }
}


function App() {
  let [todolist, setTodolist] = useState(getLocalItems());
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(todolist))
  },[todolist]);


  return (

    <div className={`container ${theme}`}>
      <div className="row">

        {/* <div>
        <Darkmode></Darkmode>
      </div> */}

        <div >
          <Addtodo setTodolist={setTodolist} todolist={todolist} />
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
