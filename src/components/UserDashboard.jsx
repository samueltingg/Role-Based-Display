export default function UserDashboard() {
  return (
    <div className="dashboard user-dashboard">
      <h1>User Dashboard</h1>
      <div className="content">
        <p>Welcome to the user dashboard</p>
        <div className="user-features">
          <h2>Available Features</h2>
          <ul>
            <li>View Profile</li>
            <li>Update Settings</li>
            <li>View Basic Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
