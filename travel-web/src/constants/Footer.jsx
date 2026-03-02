import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css'; // CSS 파일 임포트

export default function Footer() {
  const location = useLocation(); // 현재 경로를 가져옴

  return (
    <div className="footer-container">
      <Link to="/" className={`footer-item ${location.pathname === '/' ? 'active' : ''}`}>
        <span className="footer-icon">🏠</span>
        <span className="footer-text">메인</span>
      </Link>
      
      <Link to="/schedule" className={`footer-item ${location.pathname === '/schedule' ? 'active' : ''}`}>
        <span className="footer-icon">📅</span>
        <span className="footer-text">내계획</span>
      </Link>
      
      <Link to="/wishlist" className={`footer-item ${location.pathname === '/wishlist' ? 'active' : ''}`}>
        <span className="footer-icon">❤️</span>
        <span className="footer-text">찜목록</span>
      </Link>
      
      <Link to="/mypage" className={`footer-item ${location.pathname === '/mypage' ? 'active' : ''}`}>
        <span className="footer-icon">👤</span>
        <span className="footer-text">마이페이지</span>
      </Link>
    </div>
  );
}