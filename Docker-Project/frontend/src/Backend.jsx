import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiStatus, setApiStatus] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setApiStatus(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <div className="hero">
        <h1>Frontend Dashboard</h1>
        <p>Connected with Node.js Backend API</p>
      </div>

      <div className="grid">
        {/* API Status Card */}
        <div className="card status-card">
          <h2>API Status</h2>

          {apiStatus ? (
            <>
              <div className="status-badge">
                ● {apiStatus.status}
              </div>

              <p className="message">
                {apiStatus.message}
              </p>
            </>
          ) : (
            <p className="loading">Loading API Status...</p>
          )}
        </div>

        {/* Users Card */}
        <div className="card users-card">
          <h2>Hello Users</h2>

          {users.length > 0 ? (
            <div className="users-list">
              {users.map((user) => (
                <div className="user-box" key={user.id}>
                  <div className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3>{user.name}</h3>
                    <p>User ID: {user.id}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="loading">Loading Users...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;