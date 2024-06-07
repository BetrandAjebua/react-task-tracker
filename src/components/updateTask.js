import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [task, setTask] = useState("");
  const [gender, setGender] = useState();
  const [matricle, setMatricle] = useState();
  const [attendanceStatus, setAttendance] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("task title Absent");
      return;
    }

  
    onAdd({ task, attendanceStatus, gender });

    setTask("");
    setAttendance(false);
  };

  return (
    <form className="add-form" onSubmit={onsubmit}>
        <h3>Update Task</h3>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Matricle Number</label>
        <input
          type="text"
          placeholder="Enter Student Matricle"
          value={matricle}
          onChange={(e) => setMatricle(e.target.value)}
        />
      </div>
      <div className="form-control form-flex ">
        <div className="sub-sec">
        <label>Mark Present</label>
        <input
          type="checkbox"
          checked={attendanceStatus}
          onChange={(e) => setAttendance(e.currentTarget.checked)}
        />
        </div>
        <div className="sub-sec">
        <label>Gender</label>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
        </select>
        </div>
      </div>
      <div className="form-control-check">
       
      </div>
      <input style={{backgroundColor:"blue"}} className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  );
}
