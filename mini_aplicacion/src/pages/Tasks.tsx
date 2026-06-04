import { useState, useEffect } from "react";
import type { Task } from "../types/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getAllTasks, createTask, updateTask, deleteTask } from "../Services/taskService";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET - carga tareas desde el backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        setTasks(data);
      } catch (err) {
        setError("Error al cargar las tareas");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleCreate = async (newTask: Partial<Task>) => {
    try {
      const created = await createTask(newTask);
      setTasks([...tasks, created]);
    } catch (err) {
      setError("Error al crear la tarea");
    }
  };

  const handleComplete = async (id: number) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;
      const updated = await updateTask(id, { completed: !task.completed });
      setTasks(tasks.map(t => t.id === id ? updated : t));
    } catch (err) {
      setError("Error al actualizar");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      setError("Error al eliminar");
    }
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1 className="page-title">Mis Tareas</h1>
        <p className="page-subtitle">
          {tasks.length === 0
            ? "No tienes tareas todavía. ¡Agrega la primera!"
            : `Tienes ${tasks.filter(t => !t.completed).length} tarea(s) pendiente(s)`}
        </p>
      </div>
      <TaskForm onSubmit={handleCreate} />
      <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  );
}