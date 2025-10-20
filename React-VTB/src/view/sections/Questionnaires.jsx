import React, { useState } from "react";
import "./Questionnaires.css";

const Questionnaires = ({ onSelectQuestionnaire }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const questionnaires = [
    {
      id: 1,
      mol: "Иванов И.И.",
      department: "Отдел IT",
      asset: "Ноутбук Dell XPS 13",
      serialNumber: "SN-DELL-12345",
      status: "pending",
      date: "2024-01-15",
      priority: "medium",
      lastAction: "Отправлена на проверку",
    },
    {
      id: 2,
      mol: "Петров П.П.",
      department: "Бухгалтерия",
      asset: "Монитор Samsung LC27",
      serialNumber: "SN-SAMS-67890",
      status: "needs_correction",
      date: "2024-01-15",
      priority: "high",
      lastAction: "Требует правок: нечеткое фото",
    },
    {
      id: 3,
      mol: "Сидоров С.С.",
      department: "Отдел кадров",
      asset: "Принтер HP LaserJet",
      serialNumber: "SN-HP-54321",
      status: "approved",
      date: "2024-01-14",
      priority: "low",
      lastAction: "Принята бухгалтерией",
    },
    {
      id: 4,
      mol: "Козлова А.М.",
      department: "Юридический отдел",
      asset: "Сканер Canon",
      serialNumber: "SN-CAN-98765",
      status: "pending",
      date: "2024-01-14",
      priority: "medium",
      lastAction: "Ожидает проверки",
    },
  ];

  const getStatusBadge = (status) => {
    const statuses = {
      pending: { label: "На проверке", class: "status-pending", icon: "⏳" },
      needs_correction: {
        label: "Правки",
        class: "status-correction",
        icon: "⚠️",
      },
      approved: { label: "Принято", class: "status-approved", icon: "✅" },
    };
    const statusInfo = statuses[status];
    return (
      <span className={`status-badge ${statusInfo.class}`}>
        <span className="status-icon">{statusInfo.icon}</span>
        {statusInfo.label}
      </span>
    );
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      high: "🔴",
      medium: "🟡",
      low: "🟢",
    };
    return icons[priority] || "⚪";
  };

  const filteredQuestionnaires = questionnaires.filter((q) => {
    const matchesSearch =
      q.mol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || q.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = questionnaires.reduce((acc, q) => {
    acc[q.status] = (acc[q.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="questionnaires">
      <div className="questionnaires-header">
        <h1>Управление анкетами</h1>
        <div className="header-actions">
          <button className="btn btn-primary">
            <span className="btn-icon">📥</span>
            Импорт данных
          </button>
          <button className="btn btn-secondary">
            <span className="btn-icon">🔄</span>
            Обновить
          </button>
        </div>
      </div>

      <div className="questionnaires-stats">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <div className="stat-value">{questionnaires.length}</div>
            <div className="stat-label">Всего анкет</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <div className="stat-value">{statusCounts.pending || 0}</div>
            <div className="stat-label">На проверке</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <div className="stat-value">
              {statusCounts.needs_correction || 0}
            </div>
            <div className="stat-label">Требуют правок</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">{statusCounts.approved || 0}</div>
            <div className="stat-label">Принято</div>
          </div>
        </div>
      </div>

      <div className="questionnaires-filters">
        <div className="search-group">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Поиск по МОЛ, активу или серийному номеру..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="filter-group">
          <label>Статус:</label>
          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Все статусы</option>
            <option value="pending">На проверке</option>
            <option value="needs_correction">Требуют правок</option>
            <option value="approved">Принято</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Сортировка:</label>
          <select className="filter-select">
            <option>По дате (новые)</option>
            <option>По дате (старые)</option>
            <option>По МОЛ (А-Я)</option>
            <option>По активу (А-Я)</option>
          </select>
        </div>
      </div>

      <div className="questionnaires-content">
        <div className="questionnaires-list">
          {filteredQuestionnaires.map((q) => (
            <div
              key={q.id}
              className={`questionnaire-card status-${q.status}`}
              onClick={() => onSelectQuestionnaire(q)}
            >
              <div className="card-header">
                <div className="card-title">
                  <span className="priority-icon">
                    {getPriorityIcon(q.priority)}
                  </span>
                  <h3>Анкета #{q.id}</h3>
                  <span className="asset-name">{q.asset}</span>
                </div>
                {getStatusBadge(q.status)}
              </div>

              <div className="card-details">
                <div className="detail-row">
                  <span className="detail-label">МОЛ:</span>
                  <span className="detail-value">{q.mol}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Подразделение:</span>
                  <span className="detail-value">{q.department}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Серийный номер:</span>
                  <span className="detail-value serial-number">
                    {q.serialNumber}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Дата отправки:</span>
                  <span className="detail-value">{q.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Последнее действие:</span>
                  <span className="detail-value action-text">
                    {q.lastAction}
                  </span>
                </div>
              </div>

              <div className="card-actions">
                <button className="btn btn-primary">
                  <span className="btn-icon">👁️</span>
                  Просмотр
                </button>
                <button className="btn btn-secondary">
                  <span className="btn-icon">📥</span>
                  Скачать
                </button>
                {q.status === "needs_correction" && (
                  <button className="btn btn-warning">
                    <span className="btn-icon">✏️</span>
                    Исправить
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredQuestionnaires.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3>Анкеты не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтрации</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaires;
