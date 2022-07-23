import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <div>
      {typeof userData.users === 'undefined' ? (
        <p>loading...</p>
      ) : (
        userData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}
