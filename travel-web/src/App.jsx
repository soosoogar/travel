// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './constants/Footer'; // 폴더 위치에 맞게 작성됨
import CategoryList from './pages/CategoryList';

function App() {
  return (
    <BrowserRouter>
      {/* Tailwind가 적용되도록 전체 레이아웃 설정 */}
      <div className="min-h-screen bg-gray-50 pb-16"> 
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 나중에 Schedule, Wishlist 등을 여기에 추가하세요 */}
          <Route path="/list/:categoryName" element={<CategoryList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;