import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // ✅ 需要加入這個
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* ✅ 外層包住 Router context */}
      <App />
    </BrowserRouter>
  </StrictMode>
);