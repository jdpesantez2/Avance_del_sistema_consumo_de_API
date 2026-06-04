import type { TaskFormProps, Task } from "../types/Task";
import "./TaskForm.css";
import React, { useState } from "react";

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onSubmit({ title: title.trim(), priority });
    setTitle("");
    setPriority("medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Nueva Tarea</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="task-title">Nombre de la tarea</label>
          <input
            id="task-title"
            type="text"
            placeholder="¿Qué necesitas hacer?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="task-priority">Prioridad</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Task["priority"])}
            className="form-select"
          >
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-add">
        <span>+</span> Agregar tarea
      </button>
    </form>
  );
}
