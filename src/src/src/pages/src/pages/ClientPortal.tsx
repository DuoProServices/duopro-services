import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function ClientPortal() {
  const { user, loading } = useAuth()
  const { t } = useLanguage()

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Client Portal</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your client portal!</p>
          {user && <p className="mt-4">Logged in as: {user.email}</p>}
        </div>
      </div>
    </div>
  )
}
