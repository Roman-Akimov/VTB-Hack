// components/Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: "ai-assistant", label: "ИИ-ассистент", icon: "🤖", badge: null }, // Добавляем ИИ в меню
    { id: "dashboard", label: "Дашборд", icon: "📊" },
    { id: "questionnaires", label: "Анкеты", icon: "📋", badge: 12 },
    { id: "corrections", label: "Правки", icon: "⚠️", badge: 3 },
    { id: "inventories", label: "Инвентаризации", icon: "📦" },
    { id: "reports", label: "Отчеты", icon: "📈" },
    { id: "settings", label: "Настройки", icon: "⚙️" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://moscow-export.com/reduced-credit/img/vtb.svg"
          width={"60px"}
        />
        <h3>Инвентаризация</h3>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => onSectionChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">БУ</div>
          <div className="user-details">
            <div className="user-name">Бухгалтерия</div>
            <div className="user-role">Отдел ОС</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
