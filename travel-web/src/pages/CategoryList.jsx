import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CategoryList.css';

// 임시 숙소 데이터
const DUMMY_HOTELS = [
  { id: 1, name: '시그니엘 서울', rating: 4.9, reviews: 1250, price: '450,000', location: '송파구' },
  { id: 2, name: '그랜드 하얏트', rating: 4.7, reviews: 890, price: '320,000', location: '용산구' },
  { id: 3, name: '신라 호텔', rating: 4.8, reviews: 2100, price: '500,000', location: '중구' },
];

export default function CategoryList() {
  const { categoryName } = useParams(); // URL에서 카테고리 이름을 가져옴
  const navigate = useNavigate();

  return (
    <div className="list-container">
      <header className="list-header">
        <button className="back-btn" onClick={() => navigate(-1)}>⬅️</button>
        <h1 className="category-title">{categoryName}</h1>
      </header>

      <div className="hotel-list">
        {DUMMY_HOTELS.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-image">숙소 이미지 영역</div>
            <div className="hotel-info">
              <div className="hotel-stats">
                <span className="rating">★ {hotel.rating}</span> ({hotel.reviews}) · {hotel.location}
              </div>
              <h3>{hotel.name}</h3>
              <div className="price-box">
                <span className="price">{hotel.price}원 ~</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}