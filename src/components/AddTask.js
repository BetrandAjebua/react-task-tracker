import { useState } from "react"



export default function AddTask({onAdd}) {
    const  [task, setTask] = useState("");
    const  [day, setDay] = useState("");
    const  [setReminder, setReminder1] = useState(false);


const onsubmit = (e)=>{
    e.preventDefault();

    if(!task){
        alert("task title Absent")
        return
    }
    
    if(!day){
        alert("input The Day")
        return
    }
    onAdd({task, day, setReminder})

    setTask("")
    setDay("")
    setReminder1(false)
}



  return (
  <form className='add-form' onSubmit={onsubmit}>
    <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
    </div>

    <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
    </div>
.
    <div className='form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={setReminder} onChange={(e)=>setReminder1(e.currentTarget.checked)}/>
    </div>

    <input className='btn btn-block' type='submit' value="Save Task"></input>
  </form>
  )
}
