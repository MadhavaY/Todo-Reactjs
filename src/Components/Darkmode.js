import React from 'react';
import { useState } from 'react';

function Darkmode() {

  const[checked, setChecked] = useState(false);

  const handleChange=(()=>{
         setChecked(!checked);
         
  })
  return (
    <div className='darkmode-container'>
      <label>
        <input type="checkbox" onChange={handleChange} className='checkbox'  />
        Dark mode
      </label>

      
    </div>
  )
}

export default Darkmode