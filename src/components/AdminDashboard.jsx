// components/AdminDashboard.js
export default function AdminDashboard() {
  return (
    <div className="dashboard admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="content">
        <p>Welcome to the admin dashboard</p>
        <div className="admin-features">
          <h2>Administrative Controls</h2>
          <ul>
            <li>User Management</li>
            <li>System Settings</li>
            <li>Advanced Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
