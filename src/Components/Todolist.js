import React from 'react';
import './Todolist.css';

function Todolist(props) {

  if (!props.todolist.length) {
    return (
      <div className='list-container'>
        <p>Empty</p>
      </div>
    );
  }


  const deleteTodo = (ind) => {
    alert(ind);
    var newList = props.todolist;
    if (Array.isArray(props.todolist)) {

      newList.splice(ind, 1);

      props.setTodolist([...newList]);
    }
  }

  const deleteAll = () => {
    var newList1;

    props.setTodolist([newList1]);

  }
  
  console.log(props.todolist);
  return (
    
    // < button className='button' onClick={() => deleteAll()}>Delete All</button>
    <div className='list-container'>
      
      <div className="list">
        

        {
          props.todolist.map((todo, index, ind) => <span key={index}>
            {todo

            }

            < button key={ind} id='deletebtn' className='button' onClick={() => deleteTodo(ind)}>Delete</button>



            <hr></hr>

          </span>)
        }


      </div>



    </div >
  )
}

export default Todolist;