import './styles/Footer.css';
// Footer.js
import React from "react";
import "./styles/Footer.css";
import logo from "../assets/logo.png"; // твой логотип

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="footer-logo">
          <img src={logo} alt="Логотип" />
        </div>

        {/* Контакты */}
        <div className="footer-contacts">
          <p>📍 г. Бишкек, ул. Ленина 50</p>
          <p>📧 ddr@example.com</p>
          <div className="footer-socials">
            <a href="https://wa.me/996701451146" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" />
            </a>
            <a href="https://instagram.com/yourshop" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Короткая подпись */}
        <div className="footer-note">
          <p>Мы поможем выбрать лучшее снаряжение и аксессуары для ваших приключений</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
