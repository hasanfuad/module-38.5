import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams();
    
    const [userInfo, setUserInfo] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUserInfo(data))
    },[]);
    const {name,username,email} = userInfo;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Id: {userInfo.id}</p>
        </div>
    );
};

export default UserDetail;