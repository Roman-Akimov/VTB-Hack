import React from "react";
import "./Corrections.css";

const Corrections = () => {
  const corrections = [
    {
      id: 1,
      mol: "Иванов И.И.",
      department: "Отдел IT",
      asset: "Ноутбук Dell XPS 13",
      issue: "Нечеткое фото серийного номера",
      status: "waiting",
      date: "15.01.2024",
      priority: "high",
    },
    {
      id: 2,
      mol: "Петров П.П.",
      department: "Бухгалтерия",
      asset: "Монитор Samsung LC27",
      issue: "Отсутствует серийный номер в описании",
      status: "in_progress",
      date: "14.01.2024",
      priority: "medium",
    },
    {
      id: 3,
      mol: "Сидоров С.С.",
      department: "Отдел кадров",
      asset: "Принтер HP LaserJet",
      issue: "Неверно указано состояние оборудования",
      status: "waiting",
      date: "14.01.2024",
      priority: "low",
    },
  ];

  const getPriorityIcon = (priority) => {
    const icons = {
      high: "🔴",
      medium: "🟡",
      low: "🟢",
    };
    return icons[priority] || "⚪";
  };

  return (
    <div className="corrections">
      <div className="corrections-header">
        <h1>Анкеты требующие правок</h1>
        <div className="corrections-stats">
          <span className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">всего правок</span>
          </span>
          <span className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">ожидают</span>
          </span>
        </div>
      </div>

      <div className="corrections-filters">
        <div className="filter-group">
          <label>Статус:</label>
          <select className="filter-select">
            <option>Все статусы</option>
            <option>Ожидают правок</option>
            <option>В работе</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Приоритет:</label>
          <select className="filter-select">
            <option>Все приоритеты</option>
            <option>Высокий</option>
            <option>Средний</option>
            <option>Низкий</option>
          </select>
        </div>
        <button className="btn btn-secondary">Сбросить фильтры</button>
      </div>

      <div className="corrections-list">
        {corrections.map((corr) => (
          <div
            key={corr.id}
            className={`correction-card priority-${corr.priority}`}
          >
            <div className="correction-header">
              <div className="correction-title">
                <span className="priority-icon">
                  {getPriorityIcon(corr.priority)}
                </span>
                <h3>
                  Анкета #{corr.id} - {corr.asset}
                </h3>
              </div>
              <span className={`status-badge status-${corr.status}`}>
                {corr.status === "waiting" ? "Ожидает правок" : "В работе"}
              </span>
            </div>

            <div className="correction-details">
              <div className="detail-row">
                <span className="detail-label">МОЛ:</span>
                <span className="detail-value">{corr.mol}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Подразделение:</span>
                <span className="detail-value">{corr.department}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Дата отправки:</span>
                <span className="detail-value">{corr.date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Проблема:</span>
                <span className="detail-value issue-text">{corr.issue}</span>
              </div>
            </div>

            <div className="correction-actions">
              <button className="btn btn-primary">📧 Написать МОЛ</button>
              <button className="btn btn-secondary">
                👁️ Просмотреть анкету
              </button>
              <button className="btn btn-outline">⏰ Напомнить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corrections;
