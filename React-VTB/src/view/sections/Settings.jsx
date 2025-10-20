import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    newQuestionnaires: true,
    corrections: true,
    reports: false,
    deadlines: true,
  });

  const [exportFormat, setExportFormat] = useState("excel");

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Настройки системы</h1>
        <div className="settings-actions">
          <button className="btn btn-secondary">Сбросить</button>
          <button className="btn btn-primary">Сохранить</button>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="card-header">
            <div className="card-icon">🔔</div>
            <h3>Уведомления</h3>
          </div>
          <div className="settings-list">
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={notifications.newQuestionnaires}
                  onChange={() => handleNotificationChange("newQuestionnaires")}
                />
                <span className="checkmark"></span>
                Новые анкеты
              </label>
            </div>
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={notifications.corrections}
                  onChange={() => handleNotificationChange("corrections")}
                />
                <span className="checkmark"></span>
                Требуют правок
              </label>
            </div>
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={notifications.reports}
                  onChange={() => handleNotificationChange("reports")}
                />
                <span className="checkmark"></span>
                Готовы отчеты
              </label>
            </div>
            <div className="setting-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={notifications.deadlines}
                  onChange={() => handleNotificationChange("deadlines")}
                />
                <span className="checkmark"></span>
                Напоминания о сроках
              </label>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <div className="card-icon">📤</div>
            <h3>Экспорт данных</h3>
          </div>
          <div className="settings-list">
            <div className="setting-item">
              <label>Формат по умолчанию</label>
              <select
                value={exportFormat}
                onChange={(e) => setExportFormat(e.target.value)}
                className="format-select"
              >
                <option value="excel">Excel (.xlsx)</option>
                <option value="pdf">PDF (.pdf)</option>
                <option value="csv">CSV (.csv)</option>
              </select>
            </div>
            <div className="setting-item">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                Включать фотографии
              </label>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <div className="card-icon">🔗</div>
            <h3>Интеграции</h3>
          </div>
          <div className="integration-list">
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-name">1C:Бухгалтерия</div>
                <div className="integration-status">Не подключено</div>
              </div>
              <button className="btn btn-outline">Настроить</button>
            </div>
            <div className="integration-item">
              <div className="integration-info">
                <div className="integration-name">SAP ERP</div>
                <div className="integration-status">Не подключено</div>
              </div>
              <button className="btn btn-outline">Настроить</button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="card-header">
            <div className="card-icon">👥</div>
            <h3>Права доступа</h3>
          </div>
          <div className="settings-list">
            <div className="setting-item">
              <div className="role-info">
                <div className="role-name">Бухгалтер</div>
                <div className="role-desc">Просмотр, проверка анкет</div>
              </div>
            </div>
            <div className="setting-item">
              <div className="role-info">
                <div className="role-name">Администратор</div>
                <div className="role-desc">Полный доступ к системе</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
