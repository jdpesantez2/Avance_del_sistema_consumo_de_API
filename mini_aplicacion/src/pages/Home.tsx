import { useNavigate } from "react-router-dom";
import type { Task } from "../types/Task";
import "./Home.css";

interface HomeProps {
  tasks: Task[];
}

export default function Home(_props: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="hero-badge">Bienvenido</div>
        <h1 className="hero-title">
          Organiza tu día<br />
          <span className="hero-accent">sin esfuerzo</span>
        </h1>
        <p className="hero-subtitle">
          Gestiona tus tareas personales de forma simple, clara y eficiente.
          Mantén el foco en lo que realmente importa.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate("/tasks")}>
            Ir a Tareas
          </button>
          <button className="btn-secondary" onClick={() => navigate("/stats")}>
            Ver Estadísticas
          </button>
        </div>
      </div>
    </div>
  );
}