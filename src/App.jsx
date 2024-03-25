import React from "react";
import Heading from "./Components/Heading";
import Taskinput from "./Components/Taskinput";
import TodoBoard from "./Components/TodoBoard";
import { useState } from "react";

const App = () => {
  const [newInput, setNewInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [editIndex,setEditIndex]=useState(0)
  function handleAddingTask() {
    if (newInput !== "") {
      let newTaskFromInput = { newInput: newInput, isDone: false, Edit: false };
      setTasks([...tasks, newTaskFromInput]);
      setNewInput("");
      console.log(tasks);
    }
  }

  function handleInputChange(e) {
    setNewInput(e.target.value);
  }

  function handleDone(index) {
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];

    // Get the task at the specified index
    const taskToUpdate = updatedTasks[index];

    // Toggle the isDone property based on its current value
    if (taskToUpdate.isDone === true) {
      taskToUpdate.isDone = false;
    } else {
      taskToUpdate.isDone = true;
    }

    // Update the state with the new array
    setTasks(updatedTasks);
  }

  function handleEdit(index) {
    setEditStatus(true);
    let newEditingList = [...tasks];

    setNewInput(newEditingList[index].newInput);
    newEditingList.forEach((item) => (item.Edit = true));

    setTasks(newEditingList);
    setEditIndex(index)
    
  }
  function handleSavingEditTask(e,index) {
    let taskIndex = index;
    let newUpdatingList = [...tasks]
    setNewInput(e.target.value)
    newUpdatingList[taskIndex].newInput=newInput;
    newUpdatingList.forEach((item) => {item.Edit = false
    item.isDone = false});
    setEditStatus(false)
    setTasks(newUpdatingList) 
console.log(tasks)
    /// dekh ek task pe agar edit click kiye toh woh edit task jayga 
    /// input filed me 
    
  }
  function handleDelete(index) {
    console.log(index)
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];
  
    // Filter out the task with the specified index
    const updatedList = updatedTasks.filter((item, i) => i !== index);
  
    // Update the state with the filtered array
    setTasks(updatedList);
  }
  
  return (
    <div className="page1">
      <div className="appcontainer">
        <Heading tasks={tasks}></Heading>
        <Taskinput
          handleAddingTask={handleAddingTask}
          handleInputChange={handleInputChange}
          newInput={newInput}
          setNewInput={setNewInput}
          editStatus={editStatus}
          handleSavingEditTask={handleSavingEditTask}
          editIndex={editIndex}
        ></Taskinput>
        <TodoBoard
          tasks={tasks}
          handleDone={handleDone}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        >
          {" "}
        </TodoBoard>
      </div>
    </div>
  );
};

export default App;
