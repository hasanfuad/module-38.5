import React from "react";
import { useEffect, useState } from "react";
import Friend from '../Friend/Friend';

const Home = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h2>{friend.length} </h2>
      {friend.map((friendData) => (
        <Friend key={friendData.id} friendData={friendData}></Friend>
      ))}
    </div>
  );
};

export default Home;
