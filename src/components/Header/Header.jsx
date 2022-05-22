import React from "react";

import "./Header.module.scss";

function Header() {
  return (
    <div>
      <header>
        <nav className="container menu">
          <a href="/">Меню</a>
          <a href="/">Технологии</a>
          <a href="/">Контакты</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
