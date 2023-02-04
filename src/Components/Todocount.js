import React from 'react'

function Todocount(props) {
  return (
    <div>
        <p className='display-5 text-warning'>Todocount</p>
        <h1 className='text-secondary'>{props.todolist.length}</h1>
    </div>
  )
} 

export default Todocount; 