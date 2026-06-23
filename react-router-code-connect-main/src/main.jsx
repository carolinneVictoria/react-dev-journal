import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Feed } from './pages/Feed/index.jsx'
import { BlogPost } from './pages/BlogPost/index.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { ProtectedRoute } from './components/ProtectedRoute/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />

          <Route path='/' element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
            } />

          <Route path='/blog-post' element={
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)