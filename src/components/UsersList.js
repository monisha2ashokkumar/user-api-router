import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import axios from "axios";
export default function UsersList(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        setUsers(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <h1>Total users: {users.length}</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}><NavLink to={{pathname:`/users/${user.id}`, userData:user}}> {user.name}</NavLink>
              </li>
        ))}
      </ol>
    </div>
  );
}
