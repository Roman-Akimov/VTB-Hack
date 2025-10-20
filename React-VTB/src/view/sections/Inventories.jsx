import React, { useState } from "react";
import "./Inventories.css";

const Inventories = () => {
  const inventories = [
    {
      id: 1,
      name: "Инвентаризация Q1 2024",
      region: "Головной офис",
      progress: 75,
      status: "active",
      startDate: "15.01.2024",
      endDate: "15.02.2024",
      totalAssets: 156,
      completedAssets: 117,
      responsible: "Иванов А.В.",
    },
    {
      id: 2,
      name: "Инвентаризация Q1 2024",
      region: "Регион Север",
      progress: 45,
      status: "active",
      startDate: "15.01.2024",
      endDate: "20.02.2024",
      totalAssets: 89,
      completedAssets: 40,
      responsible: "Петрова С.И.",
    },
    {
      id: 3,
      name: "Инвентаризация Q4 2023",
      region: "Все регионы",
      progress: 100,
      status: "completed",
      startDate: "01.10.2023",
      endDate: "15.12.2023",
      totalAssets: 245,
      completedAssets: 245,
      responsible: "Сидоров П.К.",
    },
    {
      id: 4,
      name: "Внеплановая инвентаризация",
      region: "Отдел IT",
      progress: 30,
      status: "active",
      startDate: "10.01.2024",
      endDate: "31.01.2024",
      totalAssets: 67,
      completedAssets: 20,
      responsible: "Козлов Д.М.",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredInventories = inventories.filter((inv) => {
    if (filter === "all") return true;
    if (filter === "active") return inv.status === "active";
    if (filter === "completed") return inv.status === "completed";
    return true;
  });

  const getStatusIcon = (status) => {
    return status === "active" ? "🟢" : "✅";
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return "#10b981";
    if (progress >= 70) return "#0047BB";
    if (progress >= 40) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="inventories">
      <div className="inventories-header">
        <h1>Управление инвентаризациями</h1>
        <button className="btn btn-primary">
          <span className="btn-icon">➕</span>
          Новая инвентаризация
        </button>
      </div>

      <div className="inventories-filters">
        <div className="filter-group">
          <label>Статус:</label>
          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Все инвентаризации</option>
            <option value="active">Активные</option>
            <option value="completed">Завершенные</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Регион:</label>
          <select className="filter-select">
            <option>Все регионы</option>
            <option>Головной офис</option>
            <option>Регион Север</option>
            <option>Регион Юг</option>
          </select>
        </div>
        <div className="filter-stats">
          <div className="stat">
            <span className="stat-value">{inventories.length}</span>
            <span className="stat-label">всего</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {inventories.filter((inv) => inv.status === "active").length}
            </span>
            <span className="stat-label">активных</span>
          </div>
        </div>
      </div>

      <div className="inventories-grid">
        {filteredInventories.map((inv) => (
          <div key={inv.id} className={`inventory-card status-${inv.status}`}>
            <div className="card-header">
              <div className="card-title">
                <span className="status-icon">{getStatusIcon(inv.status)}</span>
                <h3>{inv.name}</h3>
              </div>
              <span className={`status-badge status-${inv.status}`}>
                {inv.status === "active" ? "Активная" : "Завершена"}
              </span>
            </div>

            <div className="card-details">
              <div className="detail-row">
                <span className="detail-label">Регион:</span>
                <span className="detail-value">{inv.region}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Ответственный:</span>
                <span className="detail-value">{inv.responsible}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Период:</span>
                <span className="detail-value">
                  {inv.startDate} - {inv.endDate}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Активы:</span>
                <span className="detail-value">
                  {inv.completedAssets}/{inv.totalAssets}
                </span>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-info">
                <span className="progress-label">Прогресс выполнения</span>
                <span className="progress-value">{inv.progress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${inv.progress}%`,
                    backgroundColor: getProgressColor(inv.progress),
                  }}
                ></div>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <span className="btn-icon">⚙️</span>
                Управление
              </button>
              <button className="btn btn-secondary">
                <span className="btn-icon">📊</span>
                Отчет
              </button>
              {inv.status === "active" && (
                <button className="btn btn-outline">
                  <span className="btn-icon">⏸️</span>
                  Пауза
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredInventories.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h3>Инвентаризации не найдены</h3>
          <p>Попробуйте изменить параметры фильтра</p>
          <button className="btn btn-primary" onClick={() => setFilter("all")}>
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
};

export default Inventories;
