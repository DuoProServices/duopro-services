import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import HomePage from './pages/HomePage'
import ClientPortal from './pages/ClientPortal'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  )
}
