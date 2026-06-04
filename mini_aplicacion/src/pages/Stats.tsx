import type { StatsProps } from "../types/Task";
import "./Stats.css";

export default function Stats({ tasks }: StatsProps) {
  const total = tasks.length;
  const completadas = tasks.filter((t) => t.completed).length;
  const pendientes = tasks.filter((t) => !t.completed).length;
  const porcentaje = total > 0 ? Math.round((completadas / total) * 100) : 0;

  const porPrioridad = {
    Alta: tasks.filter((t) => t.priority === "high").length,
    Media: tasks.filter((t) => t.priority === "medium").length,
    Baja: tasks.filter((t) => t.priority === "low").length,
  };

  return (
    <div className="stats-page">
      <div className="stats-header">
        <h1 className="page-title">Estadísticas</h1>
        <p className="page-subtitle">Un vistazo a tu progreso</p>
      </div>

      <div className="stats-grid">
        <div className="stat-big">
          <span className="big-number">{total}</span>
          <span className="big-label">Total de Tareas</span>
        </div>
        <div className="stat-big green">
          <span className="big-number">{completadas}</span>
          <span className="big-label">Completadas</span>
        </div>
        <div className="stat-big blue">
          <span className="big-number">{pendientes}</span>
          <span className="big-label">Pendientes</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span>Progreso general</span>
          <span className="progress-pct">{porcentaje}%</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
        <p className="progress-msg">
          {porcentaje === 100
            ? "¡Completaste todas tus tareas!"
            : porcentaje >= 50
            ? "¡Vas muy bien, sigue así!"
            : total === 0
            ? "Agrega tareas para ver tu progreso"
            : "¡Tú puedes, a seguir completando!"}
        </p>
      </div>

      <div className="priority-section">
        <h2 className="section-title">Por Prioridad</h2>
        <div className="priority-bars">
          {(["Alta", "Media", "Baja"] as const).map((p) => (
            <div className="pbar-row" key={p}>
              <span className="pbar-label">
                {p === "Alta" ? "" : p === "Media" ? "" : ""} {p}
              </span>
              <div className="pbar-track">
                <div
                  className={`pbar-fill pbar-${p.toLowerCase()}`}
                  style={{
                    width: total > 0 ? `${(porPrioridad[p] / total) * 100}%` : "0%",
                  }}
                />
              </div>
              <span className="pbar-count">{porPrioridad[p]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
