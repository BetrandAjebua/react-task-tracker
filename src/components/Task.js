import { FaTimes } from "react-icons/fa"

export default function Task({tasks, onDelete, onToggle}) {
  return (
    <div className={`task ${tasks.setReminder? "reminder": ""}`} onDoubleClick={()=>onToggle(tasks.id)}>
      <h3>{tasks.task} <FaTimes style={{color:"red"}} onClick={()=>onDelete(tasks.id)}/> </h3>
      <p style={{color:`${tasks.setReminder? "green":""}`}}>{tasks.day}</p>
    </div>
  )
}
