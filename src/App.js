import Header from "./components/Header";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {
  // Add Tasks Here

const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000+1)
  const newTask = {id:id, ...task}
  setTasks([...tasks, newTask]);
  console.log(newTask)
console.log(task);
}


  const deleteTask= (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log(id);
  };
  // Toggle Reminder
  const  toggleReminder = (id) => {
setTasks(tasks.map((task)=>task.id===id ? {...task,  setReminder:!task.setReminder}: task))

  };
 
  // Use State for Form Component
const [headForm, setHeadForm]=useState(true);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Complete React project",
      day: "Monday",
      setReminder: true,
    },
    {
      id: 2,
      task: "Study MongoDB queries",
      day: "Tuesday",
      setReminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header onAdd={()=>setHeadForm(!headForm)} showHeader = {headForm} />
     {headForm && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task Added"
      )}
    </div>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default App;
