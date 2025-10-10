import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  )
}
