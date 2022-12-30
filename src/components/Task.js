import React from "react";
import '../style/Task.css';
import { MdDeleteSweep } from "react-icons/md"

function Task({ text, completed, id, completedTask, deleteTask }) {
  return (
    <div className={completed ? 'taskContainer completed' : 'taskContainer'}>
      <div className="taskText" onClick={() => completedTask(id)}>
        {text}
      </div>
      <div className="taskContainerIcon" onClick={() => deleteTask(id)}>
        <MdDeleteSweep className="taskIcon" />
      </div>
    </div>
  );
}
export default Task;