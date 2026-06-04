import type { TaskItemProps } from "../types/Task";
import "./TaskItem.css";

const priorityConfig = {
  high: { label: "Alta", class: "priority-high" },
  medium: { label: "Media", class: "priority-medium" },
  low: { label: "Baja", class: "priority-low" },
};

export default function TaskItem({ task, onComplete, onDelete }: TaskItemProps) {
  const pConfig = priorityConfig[task.priority];

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <button
        className="complete-btn"
        onClick={() => onComplete(task.id)}
        title={task.completed ? "Marcar pendiente" : "Marcar completada"}
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className="task-info">
        <span className="task-title">{task.title}</span>
        <span className={`priority-badge ${pConfig.class}`}>
          {pConfig.label}
        </span>
      </div>

      <span className={`status-tag ${task.completed ? "done" : "pending"}`}>
        {task.completed ? "Completada" : "Pendiente"}
      </span>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        title="Eliminar tarea"
      >
        ✕
      </button>
    </li>
  );
}
