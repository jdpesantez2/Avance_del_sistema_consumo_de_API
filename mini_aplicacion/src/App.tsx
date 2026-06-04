import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";
import type { Task } from "./types/Task";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: Task["priority"]) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home tasks={tasks} />} />
            <Route
              path="/tasks"
              element={
                <Tasks
                  tasks={tasks}
                  onAddTask={addTask}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
              }
            />
            <Route path="/stats" element={<Stats tasks={tasks} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}