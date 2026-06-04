import type { TaskListProps } from "../types/Task";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, onComplete, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay tareas aún</p>
        <span>¡Agrega tu primera tarea arriba!</span>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <div className="list-header">
        <h2 className="list-title">Mis Tareas</h2>
        <span className="task-count">{tasks.length} {tasks.length === 1 ? "tarea" : "tareas"}</span>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
