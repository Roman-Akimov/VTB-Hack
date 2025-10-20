import React, { useState } from "react";
import "./Reports.css";

const Reports = () => {
  const [selectedType, setSelectedType] = useState("all");

  const reports = [
    {
      id: 1,
      name: "Сводный отчет по инвентаризации",
      date: "2024-01-15",
      type: "pdf",
      size: "2.4 МБ",
    },
    {
      id: 2,
      name: "Анализ расхождений",
      date: "2024-01-14",
      type: "excel",
      size: "1.8 МБ",
    },
    {
      id: 3,
      name: "Статистика по МОЛам",
      date: "2024-01-13",
      type: "excel",
      size: "1.2 МБ",
    },
    {
      id: 4,
      name: "Отчет по завершенным инвентаризациям",
      date: "2024-01-12",
      type: "pdf",
      size: "3.1 МБ",
    },
  ];

  const filteredReports =
    selectedType === "all"
      ? reports
      : reports.filter((report) => report.type === selectedType);

  const getTypeIcon = (type) => {
    return type === "pdf" ? "📄" : "📊";
  };

  const getTypeBadge = (type) => {
    return type === "pdf" ? "PDF" : "Excel";
  };

  return (
    <div className="reports">
      <div className="reports-header">
        <h1>Отчеты и аналитика</h1>
        <div className="header-stats">
          <span className="stat">{reports.length} отчетов</span>
        </div>
      </div>

      <div className="reports-actions">
        <button className="btn btn-primary">
          <span className="btn-icon">📈</span>
          Создать отчет
        </button>
        <button className="btn btn-secondary">
          <span className="btn-icon">📥</span>
          Экспорт данных
        </button>

        <div className="filter-tabs">
          <button
            className={`tab ${selectedType === "all" ? "active" : ""}`}
            onClick={() => setSelectedType("all")}
          >
            Все
          </button>
          <button
            className={`tab ${selectedType === "pdf" ? "active" : ""}`}
            onClick={() => setSelectedType("pdf")}
          >
            📄 PDF
          </button>
          <button
            className={`tab ${selectedType === "excel" ? "active" : ""}`}
            onClick={() => setSelectedType("excel")}
          >
            📊 Excel
          </button>
        </div>
      </div>

      <div className="reports-grid">
        {filteredReports.map((report) => (
          <div key={report.id} className="report-card">
            <div className="report-icon">{getTypeIcon(report.type)}</div>

            <div className="report-content">
              <h3>{report.name}</h3>
              <div className="report-meta">
                <span>Создан: {report.date}</span>
                <span>Размер: {report.size}</span>
              </div>
            </div>

            <div className="report-actions">
              <span className="type-badge">{getTypeBadge(report.type)}</span>
              <button className="btn-download" title="Скачать">
                ⬇️
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="empty-reports">
          <div className="empty-icon">📊</div>
          <p>Отчеты не найдены</p>
        </div>
      )}
    </div>
  );
};

export default Reports;
