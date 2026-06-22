import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setApiStatus(data))

    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="app">
      <div className="hero">
        <h1>Frontend Dashboard</h1>
        <p>Connected with Node.js Backend API</p>
      </div>

      <div className="grid">
        <div className="card status-card">
          <h2>API Status</h2>

          {apiStatus ? (
            <>
              <div className="status-badge"> ● {apiStatus.status}</div>
              <p className="message">{apiStatus.message}</p>
            </>
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>

        <div className="card users-card">
          <h2>Hello Users My name is Muhammad Suleman Faiz and how are you </h2>
          <h2>Hello Users this is the updated code  </h2>
          <h2>Hello Users this is third time  updated code  </h2>
          <h2>Hello Users this is fourth time  updated code  </h2>


          <div className="users-list">
            {users.map(user => (
              <div className="user-box" key={user.id}>
                <div className="avatar">{user.name.charAt(0)}</div>
                <div> 
                  <h3>{user.name}</h3>
                  <p>User ID: {user.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App