import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // ✅ 需要加入這個
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';

function App() {
  // useEffect(() => {
  //   // 設置全局縮放為 80%
  //   document.body.style.zoom = '80%';

  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/introduction/" element={<div>hello</div>}/>
          <Route path="/experience/" element={<div>hello</div>}/>
          <Route path="/skill/" element={<div>hello</div>}/>
          {/* <Route path="/myaccount" element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>} 
          />
          <Route path="/noauth/" element={
            <ProtectedRoute>
              <NoAuth />
            </ProtectedRoute>} 
          /> */}
          {/* 动态加载 Dashboard 的路由
          {CommonRouters.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))} */}
        </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>
);