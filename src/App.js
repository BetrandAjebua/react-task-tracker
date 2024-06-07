import Header from "./components/Header";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";


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
setTasks(tasks.map((task)=>task.id===id ? {...task,  attendanceStatus:!task.attendanceStatus}: task))

  };
 
  // Use State for Form Component
const [headForm, setHeadForm]=useState(true);

  const [tasks, setTasks] = useState([ 

    {
      id: 1,
      task: 'JohnSon',
      matricle:'CT20A078',
      position: 'Monposition',
      gender:'male',
      attendanceStatus: true,
    },    
    {
      id: 2,
      gender:'male',
      matricle:'CT20A0118',
      task: 'Esidore M',
      position: 'Tuesposition',
      attendanceStatus: false,
    },    
    {
      id: 3,
      gender:'male',
      task: 'Ramson Kole',
      matricle:'CT20A0782',
      position: 'Wednesposition',
      attendanceStatus: true,
    }

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
      <Footer />
    </div>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default App;
