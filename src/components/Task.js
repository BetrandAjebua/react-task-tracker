import { FaTimes  } from "react-icons/fa"
import {  MdUpdate } from "react-icons/md"

export default function Task({tasks, onDelete, onToggle}) {
  return (
    <div className={`task ${tasks.attendanceStatus? "reminder": ""}`} onDoubleClick={()=>onToggle(tasks.id)}>
      <h3>{tasks.task} 
        <i style={{}}>
        <FaTimes style={{color:"red" ,width:"30%", marginRight:"15px"}} onClick={()=>onDelete(tasks.id)}/>
        <MdUpdate style={{color:"blue"}} onClick={()=>ontimeupdate(tasks.id)} />
        </i>
           </h3>
      <h5>{tasks.matricle}</h5>
      <i>{tasks.gender}</i>
    </div>
  )
}
