import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://www.fa.ru/upload/constructor/88a/avxkssna3pv4010iky0ec9257hu2j2l1/vtb.png"
        alt="VTB Логотип"
        className="header-logo"
      />
      <div className="header-content">
        <h1>Инвентаризация</h1>
        <p>Сервис автоматической инвентаризации активов</p>
      </div>
    </header>
  );
}

export default Header;
