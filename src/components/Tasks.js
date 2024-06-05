import Task from "./Task";
export default function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((activity) => (
        <Task
          key={activity.id}
          tasks={activity}
          onDelete={onDelete}
          onToggle = {onToggle}
  
        />
      ))}
    </>
  );
}
