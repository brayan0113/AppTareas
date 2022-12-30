import React, { useState } from "react";
import "../style/TaskList.css"
import FormTask from "./FormTask";
import Task from "./Task";

function TaskList() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();//quita espacio
      const taskUpdate = [task, ...tasks]; //Arreglo con todas las tareas
      setTask(taskUpdate); //enviamos las tareas totales
    }
  }

  const removeTask = id => {
    const taskUpdate = tasks.filter(task => task.id !== id);
    setTask(taskUpdate); //enviamos las tareas totales
  }

  const completedTask = id => {
    const taskUpdate = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(taskUpdate);
  }
  return (
    //Fragmentos <>
    <>
      <FormTask onSubmit={addTask} />
      <div className="containerListTask">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completedTask={completedTask}
              deleteTask={removeTask}
            />
          )
        }
      </div>
    </>
  )
}

export default TaskList;