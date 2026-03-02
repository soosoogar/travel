import React from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅 추가
import './Home.css';

const ACCOMMODATIONS = [
  { name: '호텔·리조트', icon: '🏨' },
  { name: '모텔', icon: '🏩' },
  { name: '펜션·풀빌라', icon: '🏡' },
  { name: '캠핑·글램핑', icon: '⛺' },
  { name: '홈&빌라', icon: '🏠' },
  { name: '게하·한옥', icon: '⛩️' },
];

// 기획안에 있던 추가 카테고리
const TRAVEL_SERVICES = [
  { name: '레저·티켓', icon: '🎟️' },
  { name: '렌터카', icon: '🚗' },
  { name: '해외 숙소', icon: '🌏' },
  { name: '패키지', icon: '📦' },
  { name: '항공', icon: '✈️' },
];

export default function Home() {
  const navigate = useNavigate(); // 이동 함수 생성

  return (
    <div className="home-container">
      <div className="header-section">
        <h1 className="header-title">TravelGo</h1>
        <div className="search-bar">
          <span>🔍</span>
          <input type="text" placeholder="어디로 떠날까요?" />
        </div>
      </div>

      <h2 className="section-title">숙소 예약</h2>
      <div className="category-grid">
        {ACCOMMODATIONS.map((item) => (
          <div 
            key={item.name} 
            className="category-item"
            onClick={() => navigate(`/list/${item.name}`)} // 클릭 시 /list/호텔·리조트 등으로 이동
          >
            <div className="icon-box">{item.icon}</div>
            <span className="category-name">{item.name}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">즐길 거리 & 교통</h2>
      <div className="category-grid">
        {TRAVEL_SERVICES.map((item) => (
          <div 
            key={item.name} 
            className="category-item"
            onClick={() => navigate(`/list/${item.name}`)} // 레저나 항공도 동일하게 이동
          >
            <div className="icon-box">{item.icon}</div>
            <span className="category-name">{item.name}</span>
          </div>
        ))}
      </div>

      <button className="floating-btn">💬</button>
    </div>
  );
}