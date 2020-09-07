import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    await fetch("/v1/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Mirage test with users.</h2>
      </header>
      <main className="App-body">
        {loading ? "Loading" : "Hello"}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
