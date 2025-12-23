import { useAuth } from '../contexts/AuthContext'

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Administrative panel</p>
          {user && <p className="mt-4">Admin: {user.email}</p>}
        </div>
      </div>
    </div>
  )
}
