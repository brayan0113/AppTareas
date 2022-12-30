import React, { useState } from "react";
import "../style/FormTask.css";
import { MdNoteAdd } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";


function FormTask(props) {
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarSend = e => {
    e.preventDefault();//no carga de nuevo la página
    
    const taskNew = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(taskNew);
  }


  return (
    <form className="taskForm" onSubmit={manejarSend}>
      <input
        className="taskInput"
        type="text"
        placeholder="Introduce una tarea"
        name="tarea"
        onChange={manejarCambio}
      />
      <button className="btnTask">Agregar tarea
        <div className="iconButton">
          <MdNoteAdd className="MdNoteAdd"></MdNoteAdd>
        </div>
      </button>
    </form>
  )
}

export default FormTask;