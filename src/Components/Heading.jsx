import React from 'react'

const Heading = (props) => {
  return (
    <div className='heading-div'>
        <h1>To-dos</h1>
        <h4><span>{props.tasks.length}</span> to-dos</h4>
    </div>
  )
}

export default Heading