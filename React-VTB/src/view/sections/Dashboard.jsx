import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Всего анкет", value: "156", color: "blue", icon: "📊" },
    { label: "На проверке", value: "23", color: "orange", icon: "⏳" },
    { label: "Требуют правок", value: "12", color: "red", icon: "⚠️" },
    { label: "Принято", value: "89", color: "green", icon: "✅" },
  ];

  const regions = [
    { name: "Головной офис", progress: 75, completed: 45, total: 60 },
    { name: "Регион Север", progress: 45, completed: 27, total: 60 },
    { name: "Регион Юг", progress: 60, completed: 36, total: 60 },
    { name: "Регион Запад", progress: 30, completed: 18, total: 60 },
  ];

  const activities = [
    {
      icon: "📋",
      text: "Иванов И. отправил анкету #123",
      time: "10 мин назад",
      type: "success",
    },
    {
      icon: "⚠️",
      text: "Анкета #87 требует правок",
      time: "1 час назад",
      type: "warning",
    },
    {
      icon: "✅",
      text: "Петров П. исправил анкету #45",
      time: "2 часа назад",
      type: "success",
    },
    {
      icon: "📦",
      text: "Завершена инвентаризация в отделе IT",
      time: "3 часа назад",
      type: "info",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Обзор инвентаризации</h1>
        <div className="header-actions">
          <button className="btn btn-refresh">🔄 Обновить данные</button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-trend">+12%</div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-section progress-section">
          <div className="section-header">
            <h2>Прогресс по регионам</h2>
            <span className="section-subtitle">Обновлено сегодня в 14:30</span>
          </div>
          <div className="progress-bars">
            {regions.map((region, index) => (
              <div key={region.name} className="progress-item">
                <div className="progress-info">
                  <span className="region-name">{region.name}</span>
                  <span className="region-stats">
                    {region.completed}/{region.total} ({region.progress}%)
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${region.progress}%` }}
                    data-progress={region.progress}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="progress-summary">
            <div className="summary-item">
              <span className="summary-label">Общий прогресс:</span>
              <span className="summary-value">52%</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Осталось дней:</span>
              <span className="summary-value">14</span>
            </div>
          </div>
        </div>

        <div className="content-section activity-section">
          <div className="section-header">
            <h2>Последние действия</h2>
            <button className="btn btn-outline">Показать все</button>
          </div>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`activity-item activity-${activity.type}`}
              >
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <div className="activity-text">{activity.text}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
                <div className="activity-badge"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <div className="quick-actions">
          <h3>Быстрые действия</h3>
          <div className="actions-grid">
            <button className="action-btn">
              <span className="action-icon">📋</span>
              <span className="action-text">Создать отчет</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">👥</span>
              <span className="action-text">Управление МОЛ</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">⚙️</span>
              <span className="action-text">Настройки</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
