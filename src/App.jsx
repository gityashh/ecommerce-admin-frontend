import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/admin" element={<MainLayout />} >
          <Route index element={<Dashboard />} />
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
