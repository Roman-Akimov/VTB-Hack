// src/view/View.jsx
import React, { useState } from "react";
import "./View.css";
import Dashboard from "./sections/Dashboard";
import Questionnaires from "./sections/Questionnaires";
import Corrections from "./sections/Corrections";
import Inventories from "./sections/Inventories";
import Reports from "./sections/Reports";
import Settings from "./sections/Settings";
import AIAssistant from "./sections/AIAssistant";

const View = ({
  activeSection,
  selectedQuestionnaire,
  onSelectQuestionnaire,
}) => {
  const renderSection = () => {
    switch (activeSection) {
      case "ai-assistant": // Добавляем case для ИИ
        return <AIAssistant />;
      case "dashboard":
        return <Dashboard />;
      case "questionnaires":
        return <Questionnaires onSelectQuestionnaire={onSelectQuestionnaire} />;
      case "corrections":
        return <Corrections />;
      case "inventories":
        return <Inventories />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="view">
      <div className="view-header">
        <div className="header-actions">
          <button className="btn btn-primary">Экспорт</button>
          <button className="btn btn-secondary">Обновить</button>
        </div>
      </div>
      <div className="view-content">{renderSection()}</div>
    </div>
  );
};

const getSectionTitle = (section) => {
  const titles = {
    dashboard: "Общая статистика",
    questionnaires: "Управление анкетами",
    corrections: "Анкеты на правках",
    inventories: "Инвентаризации",
    reports: "Отчеты и аналитика",
    settings: "Настройки системы",
  };
  return titles[section] || "Дашборд";
};

export default View;
