import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [usersData, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.event);
  };

  const filteredData = usersData.filter((user) =>
    user.first_name.includes(searchText)
  );

  return (
    <div className="responsive-container">
      <h1 className="heading">Employee List</h1>
      <input
        type="search"
        placeholder="Search by first name"
        onChange={handleSearch}
        value={searchText}
      />
      <ul className="employee-list">
        {filteredData.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt="Avatar" />
            <div>
              <p className="name-heading">
                Name: <span className="name"> {user.first_name}</span>
                <span className="name"> {user.last_name}</span>
              </p>
              <p className="email-heading">
                Email: <span className="name"> {user.email}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
