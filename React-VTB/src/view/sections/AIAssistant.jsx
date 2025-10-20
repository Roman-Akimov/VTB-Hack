import React, { useState } from "react";
import "./AIAssistant.css";

const AIAssistant = () => {
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Функции ИИ для бухгалтерии
  const accountingAIFunctions = [
    {
      label: "Автопроверка анкет",
      prompt:
        "Проведи автоматическую проверку заполненных анкет на соответствие бухгалтерским стандартам",
      icon: "✅",
      type: "validation",
    },
    {
      label: "Анализ расхождений",
      prompt:
        "Проанализируй расхождения между балансовой и фактической стоимостью активов",
      icon: "🔍",
      type: "analysis",
    },
    {
      label: "Оптимизация налогов",
      prompt:
        "Предложи оптимизацию налоговых обязательств на основе данных инвентаризации",
      icon: "💰",
      type: "tax",
    },
    {
      label: "Прогноз амортизации",
      prompt:
        "Рассчитай прогноз амортизации основных средств на следующий квартал",
      icon: "📅",
      type: "forecast",
    },
    {
      label: "Risk Assessment",
      prompt: "Оцени риски бухгалтерского учета в процессе инвентаризации",
      icon: "⚠️",
      type: "risk",
    },
    {
      label: "Генерация отчетности",
      prompt:
        "Подготовь данные для бухгалтерской отчетности по результатам инвентаризации",
      icon: "📊",
      type: "reporting",
    },
  ];

  const sendMessageToAI = async (message, functionType = "general") => {
    const newUserMessage = {
      id: Date.now(),
      type: "user",
      text: message,
      timestamp: new Date().toLocaleTimeString(),
      functionType: functionType,
    };

    setAiMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");

    // Имитация обработки ИИ
    setTimeout(() => {
      const aiResponse = generateAccountingAIResponse(message, functionType);
      const newAiMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: aiResponse.text,
        timestamp: new Date().toLocaleTimeString(),
        analysis: aiResponse.analysis,
        recommendations: aiResponse.recommendations,
      };

      setAiMessages((prev) => [...prev, newAiMessage]);
    }, 2000);
  };

  const generateAccountingAIResponse = (userMessage, functionType) => {
    const responses = {
      validation: {
        text: `🔍 **Результаты автоматической проверки анкет:**\n\n• Проверено: 156 анкет\n• Автоматически принято: 89 анкет (57%)\n• Требуют внимания бухгалтера: 23 анкеты (15%)\n• Критические ошибки: 12 анкет (8%)\n\n**Экономический эффект:**\n• Сэкономлено времени: 45 человеко-часов\n• Снижение ошибок: 67%`,
        analysis: {
          validated: 89,
          needsReview: 23,
          criticalErrors: 12,
          timeSaved: "45 часов",
          errorReduction: "67%",
        },
        recommendations: [
          "Автоматизировать проверку серийных номеров",
          "Внедрить ИИ-валидацию фотографий активов",
          "Оптимизировать маршруты МОЛ",
        ],
      },
      analysis: {
        text: `📊 **Анализ расхождений по балансу:**\n\n• Общая стоимость активов по балансу: 15,840,000 ₽\n• Фактическая стоимость: 15,120,000 ₽\n• Расхождения: 720,000 ₽ (4.5%)\n\n**Основные причины расхождений:**\n• Неучтенная амортизация: 450,000 ₽\n• Ошибочное списание: 180,000 ₽\n• Недостачи: 90,000 ₽\n\n**Рекомендации по учету:**\n• Провести дополнительную сверку по 23 позициям\n• Уточнить сроки полезного использования`,
        analysis: {
          balanceValue: "15,840,000 ₽",
          actualValue: "15,120,000 ₽",
          discrepancies: "720,000 ₽",
          discrepancyRate: "4.5%",
        },
        recommendations: [
          "Провести сверку по 23 позициям",
          "Уточнить сроки амортизации",
          "Внести корректировки в 1С",
        ],
      },
      tax: {
        text: `💰 **Оптимизация налоговых обязательств:**\n\n• Налог на имущество: возможное снижение на 120,000 ₽\n• НДС к возмещению: дополнительно 85,000 ₽\n• Налог на прибыль: оптимизация 230,000 ₽\n\n**Рекомендуемые действия:**\n1. Переклассифицировать 12 активов как ОС\n2. Уточнить сроки амортизации для 8 позиций\n3. Восстановить НДС по 5 списанным активам\n\n**Общий эффект: 435,000 ₽ в год**`,
        analysis: {
          propertyTax: "120,000 ₽",
          vatRefund: "85,000 ₽",
          profitTax: "230,000 ₽",
          totalEffect: "435,000 ₽",
        },
        recommendations: [
          "Переклассифицировать 12 активов",
          "Уточнить амортизацию 8 позиций",
          "Восстановить НДС по 5 активам",
        ],
      },
      forecast: {
        text: `📅 **Прогноз амортизации на Q2 2024:**\n\n• Общая сумма амортизации: 1,240,000 ₽\n• По основным средствам: 890,000 ₽\n• По нематериальным активам: 350,000 ₽\n\n**Ключевые изменения:**\n• Ввод новых ОС: +180,000 ₽\n• Выбытие активов: -45,000 ₽\n• Корректировка сроков: +12,000 ₽\n\n**Влияние на налоги:**\n• Снижение налога на имущество: 28,000 ₽\n• Уменьшение налога на прибыль: 310,000 ₽`,
        analysis: {
          totalDepreciation: "1,240,000 ₽",
          osDepreciation: "890,000 ₽",
          intangibleDepreciation: "350,000 ₽",
          newAssets: "+180,000 ₽",
        },
        recommendations: [
          "Учесть ввод новых ОС в апреле",
          "Скорректировать налоговую базу",
          "Обновить учетную политику",
        ],
      },
      general: {
        text: `🤖 **ИИ-ассистент готов помочь!**\n\nЯ могу помочь с:\n• Автоматической проверкой анкет инвентаризации\n• Анализом расхождений балансовой и фактической стоимости\n• Оптимизацией налоговых обязательств\n• Прогнозом амортизации и переоценки\n• Оценкой рисков бухгалтерского учета\n• Подготовкой данных для отчетности\n\n**Текущая статистика:**\n• Обработано анкет: 156\n• Выявлено расхождений: 45\n• Экономия времени: 67 часов\n• Снижение ошибок: 72%`,
        analysis: null,
        recommendations: null,
      },
    };

    return responses[functionType] || responses["general"];
  };

  const handleAIFunction = (aiFunction) => {
    sendMessageToAI(aiFunction.prompt, aiFunction.type);
  };

  const handleUserMessage = () => {
    if (userInput.trim()) {
      sendMessageToAI(userInput, "general");
    }
  };

  return (
    <div className="ai-assistant">
      <div className="ai-header">
        <h1>ИИ-ассистент</h1>
        <p>Автоматизация учета и оптимизация процессов инвентаризации</p>
      </div>

      <div className="ai-stats">
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <div className="stat-content">
            <div className="stat-value">67 часов</div>
            <div className="stat-label">Экономия времени</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">72%</div>
            <div className="stat-label">Снижение ошибок</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <div className="stat-value">435K ₽</div>
            <div className="stat-label">Налоговая оптимизация</div>
          </div>
        </div>
      </div>

      <div className="ai-content">
        <div className="ai-functions-section">
          <h2>Функции для бухгалтерии</h2>
          <div className="functions-grid">
            {accountingAIFunctions.map((func, index) => (
              <button
                key={index}
                className="ai-function-btn"
                onClick={() => handleAIFunction(func)}
              >
                <span className="function-icon">{func.icon}</span>
                <span className="function-label">{func.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="ai-chat-section">
          <div className="chat-header">
            <h3>Диалог с ИИ-ассистентом</h3>
            <span className="ai-status">● Активен</span>
          </div>

          <div className="chat-messages">
            {aiMessages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-header">
                  <span className="sender">
                    {message.type === "user" ? "Бухгалтер" : "ИИ-ассистент"}
                  </span>
                  <span className="time">{message.timestamp}</span>
                </div>
                <div className="message-text">{message.text}</div>

                {message.analysis && (
                  <div className="ai-analysis">
                    <div className="analysis-badge">📊 Анализ данных</div>
                    <div className="analysis-data">
                      {Object.entries(message.analysis).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key}:</strong> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {message.recommendations && (
                  <div className="ai-recommendations">
                    <div className="recommendations-badge">💡 Рекомендации</div>
                    <ul className="recommendations-list">
                      {message.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Задайте вопрос ИИ-ассистенту о инвентаризации..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button
              onClick={handleUserMessage}
              disabled={!userInput.trim()}
              className="send-btn"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
