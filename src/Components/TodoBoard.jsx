import React from "react";
import { MdDone } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const TodoBoard = (props) => {
  return (
    <div className="todoboard">
      {props.tasks.length === 0 ? (
        <div className="emptyDiv">No Tasks</div>
      ) : (
        props.tasks.map((item, index) => (
          <div className="task" key={index}>
            <div className={item.Edit === false ? 'edit-filterOFF':"edit-filterON"}>Editing</div>
            <button
              className="donebutton"
              onClick={() => props.handleDone(index)}
            >
              <MdDone></MdDone>
            </button>
            <h4 className={item.isDone === true ? "done" : "notDone"}>
              {item.newInput}
            </h4>
            <button className="editbutton" onClick={()=>props.handleEdit(index)}>
              <MdModeEdit></MdModeEdit>
            </button>
            <button className="deletebutton" onClick={()=>props.handleDelete(index)}>
              <MdDeleteOutline> </MdDeleteOutline>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoBoard;
