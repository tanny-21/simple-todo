import React from 'react';

const Taskinput = (props) => {
  return (
    <div className='taskinput'>
      <input 
        type="text" 
        placeholder='New to-do' 
        value={props.newInput} 
        onChange={(e) => props.handleInputChange(e)} 
      />
      <button 
        onClick={props.editStatus === true ? 
          (e) => props.handleSavingEditTask(e,props.editIndex) : 
          props.handleAddingTask}
      >
        {props.editStatus === true ? 'Save Edit' : 'Add Task'}
      </button>
    </div>
  );
}

export default Taskinput;
